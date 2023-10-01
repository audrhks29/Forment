import React, { memo, useState } from 'react';

const JoinPageCheckBox = memo(() => {
    const [selectAll, setSelectAll] = useState(false);
    const [checkboxes, setCheckboxes] = useState([
        { id: 1, label: '만14세 이상입니다', checked: false },
        { id: 2, label: '[필수] 서비스 이용약관', checked: false },
        { id: 3, label: '[필수] 개인정보 수집 및 이용 동의', checked: false },
        { id: 4, label: '[선택] SMS, 카카오톡 등 수신동의', checked: false },
        { id: 5, label: '[선택] 이메일 수신동의', checked: false }
    ]);
    const handleSelectAllChange = () => {
        setSelectAll(!selectAll);
        const updatedCheckboxes = checkboxes.map(checkbox => ({
            ...checkbox,
            checked: !selectAll
        }));
        setCheckboxes(updatedCheckboxes);
    };

    const handleCheckboxChange = (id) => {
        const updatedCheckboxes = checkboxes.map(checkbox => {
            if (checkbox.id === id) {
                return { ...checkbox, checked: !checkbox.checked };
            }
            return checkbox;
        });
        setCheckboxes(updatedCheckboxes);
    };
    return (
        <div className='join-agreement'>
            <p>
                <input
                    type="checkbox"
                    id="selectAll"
                    checked={selectAll}
                    onChange={handleSelectAllChange}
                />
                <label htmlFor="selectAll">모든 약관에 동의합니다</label>
            </p>
            {
                checkboxes.map(checkbox => (
                    <p key={checkbox.id}>
                        <input
                            type="checkbox"
                            id={checkbox.id}
                            checked={checkbox.checked}
                            onChange={() => handleCheckboxChange(checkbox.id)}
                        />
                        <label htmlFor={checkbox.id}>{checkbox.label}</label>
                    </p>
                ))
            }
        </div>
    );
});

export default JoinPageCheckBox;