//React
import React from "react";

//Data
import {tech} from '../../data/data';

//Sub-Components
import {TechList} from "../../components/techList/techList";
import {ItemBox} from "../../components/itemBox/itemBox";
import {icons} from "../../components/icons/icons";

//Images
import self from './self.png';
import linkedIn from './linkedin.svg';
import github from '../../data/techIcons/github.png';
import ig from './ig.svg';

export function Connect(){
    return(
        <div className={'row d-flex justify-content-center m-1'}>

            <div className={'connect col-auto'}>
                <h3>CONNECT</h3>

                <div className={'row p-2'}>

                    <div className={'col d-flex flex-wrap justify-content-center align-items-center'}>
                        <ItemBox
                            iconSVG={icons.email}
                            link={'mailto:sambpool@gmail.com'}
                            name={'Email'}
                        />
                        <ItemBox
                            icon={linkedIn}
                            link={'https://www.linkedin.com/in/sampool/'}
                            name={'LinkedIn'}
                        />
                        <ItemBox
                            icon={github}
                            link={'https://github.com/mrsampool'}
                            name={'GitHub'}
                        />
                        <ItemBox
                            icon={ig}
                            link={'https://www.instagram.com/mrsampool/'}
                            name={'Instagram'}
                        />
                    </div>
                </div>

            </div>

        </div>
    )
}

export function Me(props){

    function getTech(){

        const techKeys = Object.keys(tech);

        const list = techKeys.map( techKey =>{
            return tech[techKey];
        })

        return(
            <TechList
                techList={list}
            />
        )
    }

    return(
        <div className={'me row'}>

            <div className={'bio col-lg'}>

                <h2>ABOUT ME</h2>

                <div className={'row d-flex align-items-center'}>

                    <div className={'col-lg-auto d-flex justify-content-center'}>
                        <div className={'self'}>
                            <img src={self}/>
                        </div>
                    </div>

                    <div className={'col text-center text-lg-left'}>
                        <p>Hey there, Sam Pool here. I have been building freelance web projects since 2015.</p>
                        <p>I am passionate about creating elegant interfaces that engage people.</p>
                        <p>My primary technical strengths are JavaScript & React.js, but have a wide assortment of additional skills which you can see listed.</p>
                        <p>My past life was in the film & television industry where I worked as an Assistant Director, scheduling and planning logistics for complex feature film and commercial productions. This experience comes in handy for web projects that require producing original media content.</p>
                        <p>My main hobbies are cruising mountain roads and taking landscape photos - check out my IG you're interested.</p>
                    </div>

                </div>

                <Connect/>

            </div>

            <div className={'tech col-lg-4'}>
                {getTech()}
            </div>

        </div>
    )
}