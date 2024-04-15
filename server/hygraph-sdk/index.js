// this file is temporarily unused since we are not having a code-based hygraph CMS for now
// execute this file separately through node ./server/hygraph-sdk/index.js

import { Client } from '@hygraph/management-sdk'

const client = new Client({
    authToken:"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MTA3Mzc4NDgsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aGVhc3QtMi5oeWdyYXBoLmNvbS92Mi9jbHR3ZTh4eHIwMDAwMDhsNzNpa3phZXk0L21hc3RlciIsIm1hbmFnZW1lbnQtbmV4dC5ncmFwaGNtcy5jb20iXSwiaXNzIjoiaHR0cHM6Ly9tYW5hZ2VtZW50LWFwLXNvdXRoZWFzdC0yLmh5Z3JhcGguY29tLyIsInN1YiI6ImM5NGUzYWY2LTk1MWQtNDM1Yy04NTQ5LTBiYzlhNmUxMTIxMSIsImp0aSI6ImNsdHdoNTdwaDA2Y3YwNzJyMTRhejdkeW4ifQ.ms_4MLHbjFUWmshGHs0OIPnZWY7B0teiOnFju6IrDjdu6GQi2uuLMgCKoEEXhnPmnitVGDyJ_EqqpD4p10PKukDABDyfeThcKNj9AhxyqvaEErhLtz_qJPwkKtnJ6H9SDrYo9RW6HVZv7tekPW-evZJj8cVq3ueggiDyn14YRPNWhJ4IlPos9LsGSV3arfuzV0TTVCqnHDdFm0mR3i6d4w0ZAvJEG2-zoT3WbNPH40qJEiVYKUYOJcv-gMPRTQojdBOyVDdyHRrgZGsWV_7DPaGIv1fm4kvvMOz_YBFqV_8aDF39ZatQNoyncmL9hRRqhoPppE-8HQF4D3U2F-4D8HBohh5lfKN6XyK-4vdqK0WVBt6zhU_1jjE1QJfoxDyGMChyVBxgi49-SMuU5C9OchtmtoE8X1UDnW6kvzEUcJdrZ4Y_b4EERXBgzK8xwAl_C30ZkERI1iIkVOAo6fEWau_mPcSn-zxEy93Xdh_x9YMAlomjRuTILb5tlylfsbfSrcHV7NxsJPX8nOnn1wEvkmU2tgDpL-ZU46eXX-btiq12CxrjK72pLhoPu-ZITaGFePJBTdzyN8ZIaCsr6UsAO729P6l9AZye2vpR-Ft3o5hAhd_4v6eY_B3YdJPkQIQgmaE6TrYCDomm5O67SRMrNWkP8u47EPd8PwKHiPFfKhc",
    endpoint: "https://management-ap-southeast-2.hygraph.com/graphql",
})

const run = async ()=>{
    client.createModel({
        apiId: 'Promotion',
        apiIdPlural: 'Promotions',
        displayName:'Promotion',
    })
    const result = await client.run(true)
    if (result.errors){
        throw new Error(result.errors)
    }
    return result
}

run()
    .then((result)=>console.log(`Finish migration at ${result.finishedAt}`))
    .catch((err)=>console.log('Error: ',err))
