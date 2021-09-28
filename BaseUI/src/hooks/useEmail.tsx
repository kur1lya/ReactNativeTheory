import React, {FunctionComponent, useEffect, useState} from 'react';

type email = string | undefined;

const useEmail = (defaultValue: string) => {
  let error: email;

  function isEmail(defaultValue: string) {
    let regEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regEmail.test(defaultValue)) {
      error = 'Wrong Email' as string;
      return error;
    }
    error as undefined;
  }

  isEmail(defaultValue);
  let value = defaultValue;
  const getValue = () => value;
  const setValue = (newValue: string) => (value = newValue);
  return [getValue, error, setValue];
};

export default useEmail;
