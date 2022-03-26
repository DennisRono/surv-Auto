const Format = require('json-format');
let fs = require('fs');

let filename = 'data/alldata.json';

//formatter config
let config = {
type: 'space',
size: 2
}

//read the json file
const getLogs = () => {
    var webProjects = JSON.parse(fs.readFileSync(filename));
    if(Object.entries(webProjects).length === 0){
        return {data: webProjects, state: "Empty"}
    } else{
        return {data: webProjects, state: "Not Empty"}
    }
}
const write = (data, i) => {
    if(getLogs().state === "Empty"){
        let ndata = '{"'+i+'"'+' :{ "name": "", "email": "'+data+'"}}';
        fs.writeFileSync(filename, Format(JSON.parse(ndata), config));
    } else if(getLogs().state === "Not Empty") {
        let cutdat = JSON.stringify(getLogs().data).slice(0, JSON.stringify(getLogs().data).length-1);
        let jdata = cutdat+','+'"'+i+'"'+' :{ "name": "", "email": "'+data+'"}'+'}';
        fs.writeFileSync(filename, Format(JSON.parse(jdata), config));
    }
}

let mails = JSON.parse(fs.readFileSync('data/emails.json'));
mails = Object.keys(mails).map(function(_) { return mails[_]; });
for (let k = 0; k < mails.length; k++) {
    const email = mails[k];
    write(email, k+1);
}