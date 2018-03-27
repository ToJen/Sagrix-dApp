// pragma solidity ^0.4.18;

// contract AdvancedHealthcareDirective {

// 	/* ENTITY STRUCT */
// 	struct Entity {
// 		uint id;
// 		bytes32 entityAddress;
// 		uint requiredVotes;
// 		bytes32 role;
// 		mapping(bytes32 => bool) directives;
// 		mapping(Entity => bool) approvedSubstitutes;
// 		// mapping(Entity => bool) declinedSubstitues; // in case
// 		mapping(Entity => uint) dataAccessTimes;
// 	}


// 	/* STATE VARIABLES*/
// 	address owner;
// 	uint count;
// 	mapping(address => Entity) registeredEntities;
// 	address[] private entityIndex;


// 	/* EVENTS */
// 	event Registered(uint _id, bytes32 _address);
// 	event DirectiveUpdated(uint _entityID, bytes32 _question, bool _response);


// 	modifier onlyOwner() {
// 		require(msg.sender == owner);
// 		_;
// 	}

// 	modifier onlyPatient() {
// 		require(isRegistered(msg.sender))
// 		_;
// 	}


// 	function AdvancedHealthcareDirective() public {
// 		owner = msg.sender;
// 		count = 0;
// 	}

// 	function register(uint _requiredVotes, bytes32 _role, ) public returns(bool) {
// 		require(!isRegistered(msg.sender));

// 		emit Registered(_id, msg.sender);
// 		return true;
// 	}

// 	function isRegistered(address _entityAddress) public view returns(bool) {
// 		require(entityIndex.length > 0);
// 		return (entityIndex[registeredEntities[_entityAddress].index] == _entityAddress);
// 	}

// 	function updateDirective(uint entityID, bytes32 question, bool response) public {
// 		require(registered[entityID] > 0);

// 		registered[entityID].directives[question] = response.
// 		emit DirectiveUpdated(entityID, question, response);
// 	}

// }