import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] =useState('default user');

  useEffect(() => {
    fetch(url)
      .then((resp)=> {
        if(resp.status >= 200 && resp.status <= 299){
          return resp.json();
        } else  {
          setLoading(false);
          setIsError(true);
          return (
            resp.statusText // hanle HTTP 404 Error
          )
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setLoading(false);
      })
      // .catch((error) => {
      //   setIsError(error)
      // });
  }, []);
  
  if (loading) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h1>Error...</h1>
      </div>
    );
  }

  return (
    <div>
      <h2>{user}</h2>
    </div>
  );
};

export default MultipleReturns;
