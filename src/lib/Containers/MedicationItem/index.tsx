import React, { useState, useEffect } from 'react';
import { IMedication } from '../../Redux/Medication/types';

interface MedicationItemProps {
  medication: IMedication;
  onMedicationChange: (medications: IMedication[]) => void;
}

const MedicationItem: React.FC<MedicationItemProps> = ({ medication, onMedicationChange }) => {
  const [updatedMedication, setUpdatedMedication] = useState(medication);
  const [localDose, setLocalDose] = useState(medication.Dose);

  // Sync local state with medication prop
  useEffect(() => {
    setUpdatedMedication(medication);
    setLocalDose(medication.Dose);
  }, [medication]);

  const handleBlur = () => {
    const newMedication = {
      ...updatedMedication,
      Dose: localDose,
    };

    setUpdatedMedication(newMedication);
    onMedicationChange([newMedication]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalDose(e.target.value);
  };

  return (
    <div>
      <p>
        Dosage: 
        <input 
          type="text" 
          value={localDose} 
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </p>
    </div>
  );
};

export default MedicationItem;
