pragma solidity ^0.4.21;

contract SimpleAHD {

  struct Patient {
    uint id;
    bytes32 name;
    mapping(bytes32 => bool) responses;
    mapping(bytes32 => bool) circle;
    mapping(bytes32 => uint) accessTimes;
  }

  mapping(address => Patient) private patients;
  address[] private patientIndex; 

  event PatientRegistered(address patientAddress, uint patientID);
  event AddedToCircle(address patientAddress, bytes32 substitute);
  event RemovedFromCircle(address patientAddress, bytes32 substitute);
  event UpdatedResponse(address patientAddress, bytes32 question, bool answer);
  event GrantedDataAccess(address patientAddress, bytes32 name, uint duration);
  event ModifiedDataAccess(address patientAddress, bytes32 name, uint duration);
  event RevokedDataAccess(address patientAddress, bytes32 name);


  function SimpleAHD() public {}

  function register(bytes32 _name) public returns(bool) {
    if (isRegistered(msg.sender)) return false;
    patients[msg.sender].name = _name;
    /*patients[msg.sender].responses = _responses;
    patients[msg.sender].circle = _circle;
    patients[msg.sender].accessTimes = _acessTimes;*/
    /*initializeMapping(_responses, 'responses');
    initializeMapping(_circle, 'circle');
    initializeMapping(_accessTimes, 'accessTimes');*/
    patients[msg.sender].id = patientIndex.push(msg.sender)-1;
    emit PatientRegistered(msg.sender, patients[msg.sender].id);
    return true;
  }

  function isRegistered(address _patientAddress) public view returns(bool) {
    if (patientIndex.length == 0) return false;
    return (patientIndex[patients[_patientAddress].id] == _patientAddress);
  }

  function addToCircle(bytes32 _name) public returns(bool) {
    if (!isRegistered(msg.sender)) return false;
    if (patients[msg.sender].circle[_name] == true) return false;
    patients[msg.sender].circle[_name] = true;
    emit AddedToCircle(msg.sender, _name);
    return true;
  }

  function removeFromCircle(bytes32 _name) public returns(bool) {
    if (!isRegistered(msg.sender)) return false;
    if (patients[msg.sender].circle[_name] == false) return false;
    patients[msg.sender].circle[_name] = false;
    emit RemovedFromCircle(msg.sender, _name);
    return true;
  }

  function updateResponse(bytes32 _question, bool _answer) public returns(bool) {
    if (!isRegistered(msg.sender)) return false;
    patients[msg.sender].responses[_question] = _answer;
    emit UpdatedResponse(msg.sender, _question, _answer);
    return true;
  }

  function grantDataAccess(bytes32 _name, uint _duration) public returns(bool) {
    if (!isRegistered(msg.sender)) return false;
    if (patients[msg.sender].accessTimes[_name] == _duration) return false;
    patients[msg.sender].accessTimes[_name] = _duration;
    emit GrantedDataAccess(msg.sender, _name, _duration);
    return true;
  }

  function modifyDataAccess(bytes32 _name, uint _duration) public returns(bool) {
    if (!isRegistered(msg.sender)) return false;
    if (patients[msg.sender].accessTimes[_name] == 0) return false;
    if (patients[msg.sender].accessTimes[_name] == _duration) return false;
    patients[msg.sender].accessTimes[_name] = _duration;
    emit ModifiedDataAccess(msg.sender, _name, _duration);
    return true;
  }

  function revokeDataAccess(bytes32 _name) public returns(bool) {
    if (!isRegistered(msg.sender)) return false;
    if (patients[msg.sender].accessTimes[_name] == 0) return false;
    patients[msg.sender].accessTimes[_name] = 0;
    emit RevokedDataAccess(msg.sender, _name);
    return true;
  }

  /*function initializeMapping(bytes32[] dataArray, string theMapping) private {
    if(theMapping == 'responses') {   
      for(uint i=0; i<dataArray.length; i++) {
        patients[msg.sender].responses[dataArray[i]] = true;
      }
    }
    else if(theMapping == 'circle') {   
      for(uint i=0; i<dataArray.length; i++) {
        patients[msg.sender].circle[dataArray[i]] = true;
      }
    }
    else {    
      for(uint i=0; i<dataArray.length; i++) {
        patients[msg.sender].accessTimes[dataArray[i]] = true;
      }
    }
  }*/

}
