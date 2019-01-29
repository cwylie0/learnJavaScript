let availableAirplanes = [{
        name: 'AeroJet',
        fuelCapacity: 800,
        availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
    },
    {
        name: 'SkyJet',
        fuelCapacity: 500,
        availableStaff: ['pilots', 'flightAttendants']
    }
];

let flightRequirements = {
    requiredStaff: 4,
};

function meetsStaffRequirements(availableStaff, requiredStaff) {
    if (availableStaff.length >= requiredStaff) {
        return true;
    } else {
        return false;
    }
};

export {
    availableAirplanes,
    flightRequirements,
    meetsStaffRequirements
};


import {
    availableAirplanes,
    flightRequirements,
    meetsStaffRequirements
} from './airplane';

function displayFuelCapacity() {
    availableAirplanes.forEach(function (element) {
        console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
    });

};

displayFuelCapacity();

function displayStaffStatus() {
    availableAirplanes.forEach(function (element) {
        console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff));
    });
}

displayStaffStatus();