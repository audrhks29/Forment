import React, { memo } from 'react';
import { TestItemContainer } from '../styled/TestStyles';

const ContentTest = memo(() => {
    return (
        <TestItemContainer>
            <div className='inner'>
                향기 가득한 찰랑거림\n\n실리콘 없이 자연유래 아르간오일 10,000ppm과 LPP+PPT 단백질을 함유하여 모발 깊은 속까지 영양을 주는 복구 트리트먼트입니다. 단, 1회 사용만으로도 갈라진 모발의 즉각적인 변화와 머리카락에 입혀진 코튼메모리의 설렘 가득한 향기를 느껴보세요\n\n- 자연유래 아르간 커넬오일 10,000ppm\n- 실리콘 FREE\n- 모발거칠기개선 임상완료\n- 손상모 테라피를 위한 12가지 임상완료
            </div>
        </TestItemContainer >
    );
});

export default ContentTest;