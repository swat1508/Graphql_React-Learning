import React, { Component,Fragment } from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import LaunchItem from './LaunchItems';
import MissionKey from './MissionKey';

const LAUNCHES_QUERY= gql`
query LaunchesQuery{
    Launches{
        flight_number
        mission_name
        launch_date_local
        launch_success
    }
}
`;

export class Launches extends Component {
    render() {
        return (
            <Fragment>
                <h1 className="display-4 my-3">Launches</h1>
                <MissionKey/>
                <Query query={LAUNCHES_QUERY}>
                    {
                        ({loading,error,data}) => {
                            if(loading) return <h4>Loading...</h4>
                            if(error) console.log('error => ' , error);
                            console.log('data => ' , data.Launches)
                            const myData = data.Launches;
                            return <Fragment>
                                {
                                    myData.map( (launch,item) =>(
                                        <LaunchItem key={launch.flight_number} launch={launch} />
                                     //  <h1>hello</h1>
                                    ))
                                }
                            </Fragment>;
                        }
                    }
                </Query>

            </Fragment>
        )
    }
}

export default Launches
