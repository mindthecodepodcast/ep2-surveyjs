import React from 'react'

import k from './xt/lang/base-lib'

import client from './xt/lang/base-client'

// ep2-survey-tooling.app-client/create-client [19] 
function create_client(port,host){
  return client.client_ws(host || window.location.hostname,port || window.location.port,{
    "secured":window.location.protocol == "https:",
    "path":"dev/ws"
  });
}

// ep2-survey-tooling.app-client/AppClient [28] 
function AppClient({host,port}){
  let [client,setClient] = React.useState();
  let connFn = function (){
    let conn = create_client(port,host);
    conn.addEventListener("close",function (){
      return setClient(null);
    });
    globalThis["CONN"] = conn;
    setClient(conn);
  };
  React.useEffect(function (){
    connFn();
  },[]);
  return !client ? (
    <div
      style={{"position":"absolute","top":0,"left":0,"zIndex":10000}}><button title="CONNECT" onPress={connFn}></button>
    </div>) : null;
}

var MODULE = {"create_client":create_client,"AppClient":AppClient};

export default MODULE