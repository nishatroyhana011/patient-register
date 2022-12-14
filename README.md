# vercel link:
https://patient-register-server-nishatroyhana011.vercel.app/
# live link:
 https://patient-register-3498c.web.app


#  libraries/frameworks:
* reactjs
* react-dom
* react-router-dom
* nodejs
* expressjs
* mongodb
* tanstack react-query
* taliwind css
* daisyUI
* imgBB

# API lists:

* POST https://patient-register-server-nishatroyhana011.vercel.app/Psychiatrist
Bodyform-data:
psychiatristName,
hospital,
email,
password

* GET https://patient-register-server-nishatroyhana011.vercel.app/hospitals

* GET https://patient-register-server-nishatroyhana011.vercel.app/Psychiatrist?email=

Query Params
email=
nishat@gmail.com

* POST https://patient-register-server-nishatroyhana011.vercel.app/patient

Bodyform-data:
patientName, adderss, email,
phone, 
password, 
photo,
hospital,
psychiatristId

* GET https://patient-register-server-nishatroyhana011.vercel.app/hospital/:id
_id=639581bcd2f4496b9dbbf93a

* GET https://patient-register-server-nishatroyhana011.vercel.app/patient?psychiatristId=id
Query Params
psychiatristId=6396cf6e178cd2b82d0f8bdb

# Usage
* Please register a psychiatrist than log in to add a patient. I checked email and password of an existing psychiatrist and set sychiatrist  credential to state in login page
* After login, register patient option will be available in navbar. I passed hospitalID and PsychiatristId while adding a patient
* I didn't add any logout button, If you refresh the page current Psychiatrist will be removed from setPsychiatrist state.
* Psychiatrist/patient with same email can be added. I didn't check because of easy registration.


# Future possibilities
* Firebase authentication for register, login and logout
* Psychiatrist can input appoinment date and time for meeting
* seperate dashboard for psychiatrists  and patients