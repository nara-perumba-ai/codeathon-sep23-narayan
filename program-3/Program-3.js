// Write a program to validate an IP address. Given a string, write a function to check if it is a valid IP address or not. If valid, return true, otherwise return false.
// inputs: string
// outputs: boolean

function validate(ip_address){
    let result = true;
    let octets = ip_address.split('.');
    if(octets.length !== 4){
        result = false;
    } else {
        for(let i = 0; i < octets.length; i++){
            let octet = octets[i];
            if(octet < 0 || octet > 255){
                result = false;
                break;
            }
        }
    }
    return result;
}