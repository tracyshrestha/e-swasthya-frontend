import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Message from '../../helpercomponents/Message';
import { Route, useParams } from 'react-router-dom';

const initialState = {
  loading: true,
  error: false,
  message: '',
};

const VerifyAccountLink = () => {
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();
  const { id, token } = useParams();

  useEffect(() => {
    const verifyAccountL = async () => {
      try {
        await axios.get(`${process.env.REACT_APP_API}api/user/verify-account/${id}/${token}`);
        setValues({ ...values, loading: false, error: false });;
        navigate(`/verified`);
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

    verifyAccountL();
  }, [id, token, navigate, values]);

 
};

export default VerifyAccountLink;
