import React, { Component } from 'react';
import "./HOF.css"


class HOF extends Component {
    constructor() {
        super();
        this.state = {userData: [
            { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
            { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
            { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
            { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
            { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

        ]}
    }

    
    MapFunction = () =>{
        const resultData = this.state.userData.map((ele)=>(
            <React.Fragment>
                <li>
                    <span>Id : {ele.id}</span>
                    <span>Name : {ele.name}</span>
                    <span>UserType : {ele.user_type}</span>
                </li>
            </React.Fragment>
        ))
        return resultData
    }

    filterOnUsertype = () => {
        const resultData = this.state.userData.filter((ele)=>(
            ele.user_type == "Designer"
        ))
        return resultData.map((ele)=>(
            <React.Fragment>
                <li>
                    <span>ID : {ele.id}</span>
                    <span>Name : {ele.name}</span>
                    <span>UserType : {ele.user_type}</span>
                </li>
            </React.Fragment>
        ))
    }

    filterOnFirstLetter(letter){
        const resultData = this.state.userData.filter((ele)=>(
            ele.name[0].toLowerCase() == letter
        ))
        return resultData.map((ele)=>(
            <React.Fragment>
                <li>
                    <span>ID : {ele.id}</span>
                    <span>Name : {ele.name}</span>
                    <span>UserType : {ele.user_type}</span>
                </li>
            </React.Fragment>
        ))

    }
    filterOnAge(){
        const resultData = this.state.userData.filter((ele)=>(
            ele.age > 28 && ele.age <= 50
        ))
        return resultData.map((ele)=>(
            <React.Fragment>
                <li>
                    <span>ID : {ele.id}</span>
                    <span>Name : {ele.name}</span>
                    <span>UserType : {ele.user_type}</span>
                </li>
            </React.Fragment>
        ))

    }
    totalExperience(type){
        const resultData = this.state.userData.filter((ele)=>(
            ele.user_type.toLowerCase() == type.toLowerCase()
        ))
        const totalYears = resultData.reduce((total , ele)=>(
            total + ele.years
        ) , 0)
        console.log(totalYears);

        return (
            <React.Fragment>
                <li><span>Total Experience of {type} is {totalYears}</span></li>
            </React.Fragment>
        )
    }
    

    render() { 
        return (  
            <React.Fragment>
                <h1>Display All Items</h1>
                <div className='displayAllBox'>
                    <ul>{this.MapFunction()}</ul>
                </div>
                <h1>Display Based on UserType</h1>
                <div className='displayAllBox'>
                    <ul>{this.filterOnUsertype()}</ul>
                </div>
                <h1>Filter All Data starting with J</h1>
                <div className='displayAllBox'>
                    <ul>{this.filterOnFirstLetter("j")}</ul>
                </div>
                <h1>Filter data based on age greater than 28 and less than equal to 50</h1>
                <div className='displayAllBox'>
                    <ul>{this.filterOnAge()}</ul>
                </div>
                <h1>Find the total years of Designers</h1>
                <div className='displayAllBox'>
                    <ul>{this.totalExperience("Designer")}</ul>
                </div>
            </React.Fragment>
        );
    }
}
 
export default HOF;