import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const TabSwitchDetector = () => {
    const [flag, setFlag] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.visibilityState === 'hidden') {
                if (flag) {
                    axios.get('http://localhost:8000/api/logout', {
                        headers: {
                            'Authorization': `${localStorage.getItem('jwt')}`
                        }
                    })
                    .then(res => {
                        localStorage.removeItem('jwt');
                        navigate('/');
                        toast.info("You opened a new tab!");
                    })
                    .catch(err => {
                        console.error(err.response ? err.response.data.detail : err.message);
                    });
                } else {
                    toast.warning("Don't change tab! You will be logged out")
                    setFlag(true);
                }
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [flag]); // Include `flag` and `navigate` in dependencies array

    return null; // This component doesn't render anything visible
};

export default TabSwitchDetector;
