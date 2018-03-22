pragma solidity ^0.4.18;

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
    require(!isRegistered(msg.sender));
    patients[msg.sender].name = _name;
    // patients[msg.sender].responses = _responses;
    // patients[msg.sender].circle = _circle;
    // patients[msg.sender].accessTimes = _acessTimes;
    /*initializeMapping(_responses, 'responses');
    initializeMapping(_circle, 'circle');
    initializeMapping(_accessTimes, 'accessTimes');*/
    patients[msg.sender].id = patientIndex.push(msg.sender)-1;
    PatientRegistered(msg.sender, patients[msg.sender].id);
    return true;
  }

  function isRegistered(address _patientAddress) public view returns(bool) {
    require(patientIndex.length > 0);
    return (patientIndex[patients[_patientAddress].id] == _patientAddress);
  }

  function addToCircle(bytes32 _name) public {
    require(patients[msg.sender].circle[_name] == true);
    patients[msg.sender].circle[_name] = true;
    AddedToCircle(msg.sender, _name);
  }

  function removeFromCircle(bytes32 _name) public {
    require(patients[msg.sender].circle[_name] == false);
    patients[msg.sender].circle[_name] = false;
    RemovedFromCircle(msg.sender, _name);
  }

  function updateResponse(bytes32 _question, bool _answer) public {
    patients[msg.sender].responses[_question] = _answer;
    UpdatedResponse(msg.sender, _question, _answer);
  }

  function grantDataAccess(bytes32 _name, uint _duration) public {
    patients[msg.sender].accessTimes[_name] = _duration;
    GrantedDataAccess(msg.sender, _name, _duration);
  }

  function modifyDataAccess(bytes32 _name, uint _duration) public {
    patients[msg.sender].accessTimes[_name] = _duration;
    ModifiedDataAccess(msg.sender, _name, _duration);
  }

  function revokeDataAccess(bytes32 _name) public {
    require(patients[msg.sender].accessTimes[_name] > 0);
    patients[msg.sender].accessTimes[_name] = 0;
    RevokedDataAccess(msg.sender, _name);
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
