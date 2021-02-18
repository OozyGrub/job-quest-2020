### database schema
There are 6 entities including User, PersonalInfo, RunningInfo, EmergencyContact, MedicalInfo, Souvenir.
Each shared the same id which will be used to join tables.

```
class User {
  id: number;
  step: number;
	isCompleted: boolean;
}

class PersonalInfo {
  title: string;
  firstName: string;
  lastName: string;
  birthDate: date;
  email: string;
  id: number;
  address: string;
  phone: string;
  bib: string;
}

class RunningInfo {
  id: number;
  experience: string[];
  expectedDuration: { hour: string; minute: string };
}

class emergencyContact {
  id: number;
  contacts: [
    { name: string; relations: string; phone: strings },
    { name: string; relations: string; phone: strings }
  ];
}

class medicalInfo {
  id: number;
  bloodGroup: string;
  alergicInfo: {
    isAlergic: boolean;
    text: string;
  };
  healthInfo: {
    hasIssue: boolean;
    text: string;
  };
  surgeryInfo: {
    hasSurgeried: boolean;
    info: {
      year: date;
      location: string;
    };
  };
}

class Souvenir {
  id: number;
  tShirtSize: string;
}
```

### authentication

when register keep the hashed password in the database which will use b-crypt for encryption.
After that return token to responsed which use jwt to generate one from id and username

For every private route, client side must set token to the header which will be validated before access the controller.


### api

```
POST /user/step/:id @body step: number, data: object
GET /user/step/:id @return with current form step data e.g. personalResponseObject
PUT /user/step/:id @body step: number, data: object
POST /user/submit/:id 

try {
    personal = find(id).validate()
    background = find(id).validate()
    emergency = find(id).validate()
    medicalinfo = find(id).validate()
    souvenir = find(id).validate()
    user.isCompleted = true
} catch(error) { 
    throw new HttpException(BAD_REQUEST); 
}

POST /user/register @body user: string, password: string
POST /user/login/:id @body user: string, password: string

POST /personal/:id
PUT /personal/:id
POST /background/:id
PUT /background/:id
POST /emergency/:id
PUT /medicalinfo/:id
PUT /souvenir/:id
```
