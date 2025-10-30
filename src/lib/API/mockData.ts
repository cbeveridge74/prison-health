import { mock } from './api';
import { mockMedications } from '../Redux/Mocks/MockMedications';

const setupMocks = () => {
  mock.onGet('/medications').reply(200, {
    medications: mockMedications,
  });

  // Add more mock API endpoints here
};

export default setupMocks;
