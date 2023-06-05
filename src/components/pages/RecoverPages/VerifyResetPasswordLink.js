import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Message from '../../helpercomponents/Message';

const VerifyResetPasswordLink = () => {
  const initialState = {
    loading: true,
    error: false,
    message: '',
  };

  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyAccount = async () => {
        try {
          await axios.get(`${process.env.REACT_APP_API}api/user/verify-account/3/`);
          setValues({ ...values, loading: false, error: false });
          navigate('/resetpassword');
        } catch (error) {
          setValues({
            ...values,
            loading: false,
            error: true,
            message: error?.response?.data?.data[0],
          });
          console.log(error);
        }
      };
      

    verifyAccount();
  }, [navigate]);

  return (
    <div>
      {values.loading ? (
        <p>Loading...</p>
      ) : (
        <p> {values.error || values.message ? <Message message={values.message} error={values.error} /> : null}</p>
      )}
    </div>
  );
};

export default VerifyResetPasswordLink;
