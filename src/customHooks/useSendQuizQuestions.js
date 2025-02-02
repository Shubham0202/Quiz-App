import React, { useState } from 'react'

function useSendQuizQuestions (url) {
  const [status,setStatus] = useState(null);
  const [error,setError] = useState(null);

  const postData = async (data)=>{
    try{
        setStatus('loading');
        const response = await fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(data),
        });
        if(response.ok)
        setStatus('success')
        else
        throw new Error('Network reponse not okay');
    }catch(error)
    {
        setError(error)
        setStatus("error");
    }
  }
  return {postData,error,status};
}

export default useSendQuizQuestions