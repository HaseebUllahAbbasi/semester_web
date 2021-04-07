let person_obj =  {
    "results": [
        {
            "gender": "female",
            "name": {
                "title": "Mrs",
                "first": "Myrtle",
                "last": "Vargas"
            },
            "location": {
                "street": {
                    "number": 8266,
                    "name": "Stevens Creek Blvd"
                },
                "city": "Hobart",
                "state": "Queensland",
                "country": "Australia",
                "postcode": 6898,
                "coordinates": {
                    "latitude": "-84.5575",
                    "longitude": "35.6515"
                },
                "timezone": {
                    "offset": "+11:00",
                    "description": "Magadan, Solomon Islands, New Caledonia"
                }
            },
            "email": "myrtle.vargas@example.com",
            "login": {
                "uuid": "be7fdc77-f8b3-4403-a441-7a2bd8c85dec",
                "username": "beautifulladybug693",
                "password": "cyclops",
                "salt": "FTnrbmzs",
                "md5": "5bfcf7d1ec0704c9e00b5b4a08fa9aea",
                "sha1": "8394f8ea0bcc3715566fc9b5e234d730773108e5",
                "sha256": "297b7929323373b69f8d41e568614c265cf24af0380cb4d9a22f73e8ac18bce1"
            },
            "dob": {
                "date": "1951-09-07T23:20:41.165Z",
                "age": 70
            },
            "registered": {
                "date": "2014-08-12T20:09:42.504Z",
                "age": 7
            },
            "phone": "05-7538-9848",
            "cell": "0437-594-749",
            "id": {
                "name": "TFN",
                "value": "689936880"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/81.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/81.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/81.jpg"
            },
            "nat": "AU"
        },
        {
            "gender": "female",
            "name": {
                "title": "Ms",
                "first": "Audrey",
                "last": "Gomez"
            },
            "location": {
                "street": {
                    "number": 2238,
                    "name": "Depaul Dr"
                },
                "city": "Queanbeyan",
                "state": "Tasmania",
                "country": "Australia",
                "postcode": 3227,
                "coordinates": {
                    "latitude": "-17.7154",
                    "longitude": "136.5808"
                },
                "timezone": {
                    "offset": "+2:00",
                    "description": "Kaliningrad, South Africa"
                }
            },
            "email": "audrey.gomez@example.com",
            "login": {
                "uuid": "5c8f7b7e-aeef-46ac-90a0-914d832baa38",
                "username": "tinybear546",
                "password": "blondie",
                "salt": "mGn7C6Vc",
                "md5": "afa163a4f096074cc7880949b95ba315",
                "sha1": "ec2762dd00c5ebcfed2b1da2d802abbd9c2a51a1",
                "sha256": "fb21f85e92a85b476239c0608d59340bdcb4c1916cb7d906362b93ce552111e7"
            },
            "dob": {
                "date": "1946-05-04T22:12:16.940Z",
                "age": 75
            },
            "registered": {
                "date": "2014-12-13T06:21:21.118Z",
                "age": 7
            },
            "phone": "07-4622-6493",
            "cell": "0463-897-952",
            "id": {
                "name": "TFN",
                "value": "973893902"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/4.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/4.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/4.jpg"
            },
            "nat": "AU"
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Damien",
                "last": "Richard"
            },
            "location": {
                "street": {
                    "number": 4077,
                    "name": "Avenue Vauban"
                },
                "city": "Angers",
                "state": "Mayenne",
                "country": "France",
                "postcode": 20050,
                "coordinates": {
                    "latitude": "-50.0418",
                    "longitude": "161.4097"
                },
                "timezone": {
                    "offset": "+4:30",
                    "description": "Kabul"
                }
            },
            "email": "damien.richard@example.com",
            "login": {
                "uuid": "7ec02d07-0b0b-47a3-ba7f-6a5dfcf93ec5",
                "username": "orangedog356",
                "password": "kitten",
                "salt": "IKl9MPjt",
                "md5": "b1f3c55155899c4aeabdafd8e473d755",
                "sha1": "7679a6915144422d69390faf1ad08f2533417bde",
                "sha256": "708f38e01352cfb35848b2d78ae63a353cba39dd9ab3b012fc8382491faf6c3d"
            },
            "dob": {
                "date": "1967-01-24T01:57:50.395Z",
                "age": 54
            },
            "registered": {
                "date": "2014-11-21T03:39:54.478Z",
                "age": 7
            },
            "phone": "03-74-54-76-12",
            "cell": "06-40-09-97-32",
            "id": {
                "name": "INSEE",
                "value": "1NNaN58797619 70"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/14.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/14.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/14.jpg"
            },
            "nat": "FR"
        }
    ]
};
document.addEventListener('DOMContentLoaded', () => {
     display_obj_1(); 
});
function display_obj_1() 
{
    set_obj(person_obj.results[0]);
}
function set_obj(params) 
{
    console.log(params.picture.thumbnail)
    document.getElementById('pic_src').setAttribute('SRC',params.picture.large)
    document.getElementById('name-card').innerText = params.name.title  + " " +  params.name.first + " "+ params.name.last ;
    document.getElementById('add-card').innerText = params.location.street.name+ " "+ params.location.state ;
    document.getElementById('country-card').innerText = params.location.country ;
    document.getElementById('full_name').innerText = params.name.title  + " " +  params.name.first + " "+ params.name.last ;
    document.getElementById('mail').innerText = params.email ;
    document.getElementById('phone').innerText = params.phone ;
    document.getElementById('address').innerText = params.location.street.name ;
    document.getElementById('country').innerText = params.location.country ;
   
}
function display_obj_2() 
{
    set_obj(person_obj.results[1]);
}
function display_obj_3() 
{
    set_obj(person_obj.results[2]);
}
function remove_3(params) {
    person_obj.results[2]=null;

}

function remove_1(params) {
    person_obj.results[0]=null;}

function remove_2(params) {
    person_obj.results[1]=null;
}