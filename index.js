// Code your solution in this file!
function distanceFromHqInBlocks(location){
    return Math.abs(location - 42);
}

function distanceFromHqInFeet(location){
    return (Math.abs(location - 42)) * 264;
}

function distanceTravelledInFeet(start,end){
    return (Math.abs(end - start)) * 264;
}

let distance;
function calculatesFarePrice(start,destination){
    distance = Math.abs(destination - start) * 264;
    if(distance <= 400){
        return 0;
    }
    else if((distance > 400) && (distance <= 2000)){
        return (distance - 400) * 0.02;
    }
    else if((distance > 2000) && (distance <= 2500)){
        return 25;
    }
    else{
        return "cannot travel that far";
    }
}