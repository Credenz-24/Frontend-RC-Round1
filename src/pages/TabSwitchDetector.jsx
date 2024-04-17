import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const TabSwitchDetector = () => {

    const navigate = useNavigate();

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        // Notify server that user is inactive
        axios.get('http://localhost:8000/api/logout', {
                headers: {
                    'Authorization': `${localStorage.getItem('jwt')}`
                }
            })
            .then(res => {
                localStorage.removeItem('jwt');
                navigate('/');
                toast.info("You opened a new tab or minimized this window!");
                // location.reload();
                // location.reload();
            })
            .catch(err => {
                console.error(err.response ? err.response.data.detail : err.message);
            });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default TabSwitchDetector;
