import { useMemo } from 'react';

const StringAvatar = ({name}) => {
    const initials = useMemo(() => name.split(' ')[0][0], [name]);

    return {
        sx: {
            backgroundColor: '#c1a663',
            height: 35,
            width: 35,
            border: '1px solid',
        },
        children: initials,
    };
};

export default StringAvatar;