import { Dispatch } from 'redux';
import { getMedications } from './medicationService';

export const FETCH_MEDICATIONS_REQUEST = 'FETCH_MEDICATIONS_REQUEST';
export const FETCH_MEDICATIONS_SUCCESS = 'FETCH_MEDICATIONS_SUCCESS';
export const FETCH_MEDICATIONS_FAILURE = 'FETCH_MEDICATIONS_FAILURE';

const fetchMedicationsRequest = () => ({
  type: FETCH_MEDICATIONS_REQUEST,
});

const fetchMedicationsSuccess = (medications: any) => ({
  type: FETCH_MEDICATIONS_SUCCESS,
  payload: medications,
});

const fetchMedicationsFailure = (error: any) => ({
  type: FETCH_MEDICATIONS_FAILURE,
  payload: error,
});

export const fetchMedications = () => async (dispatch: Dispatch) => {
  dispatch(fetchMedicationsRequest());
  try {
    const data = await getMedications();
    dispatch(fetchMedicationsSuccess(data));
  } catch (error) {
    dispatch(fetchMedicationsFailure(error));
  }
};
