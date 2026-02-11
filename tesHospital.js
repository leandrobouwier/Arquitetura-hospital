import { Address } from './src/shared/Address.js';
import { EmergencyContact } from './src/shared/EmergencyContact.js';

import { Patient } from './src/patient/Patient.js';

import { PatientRepository } from "./src/patient/PatientRepository.js";


const address = new Address(
  'Rua das Flores',
  '123',
  'São Paulo',
  'São Paulo',
  '11111111',
);

const emergencyContact = new EmergencyContact('Maria Silva', '(11) 88888-88888');


const patient = new Patient(
  1,
  '123-456-789-00',
  'João Silva',
  '1990-01-01',
  'Masculino',
  'O+',
  address,
  '(11) 99999-9999',
  'joao.silva@email.com',
  emergencyContact,
);

const patientRepository = new PatientRepository();

patientRepository.add(patient.id, patient);

const foundPatient = patientRepository.findById(1);
console.log(foundPatient);
