import axios from "axios";
import * as config from '../constant/config'
import React from 'react'

export default function apiCaller(endpoint, method='GET',body=null) {
  return axios({
    method: method,
    url: `${config.API_URL}/${endpoint}`,
    data: body
  }).catch(err=>{
    console.log(err)
  })
}
