import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'react-calendar-timeline/lib/Timeline.css';
import moment from 'moment';
import Timeline from 'react-calendar-timeline';

class Itinerary extends Component {
    componentDidMount = () => {
        this.setCampItinerary();
    }

    getUserInfo() {
        this.props.dispatch({ type: 'FETCH_USER_PROFILE_INFO', })
    }

    setCampItinerary() {
        const action = { type: 'FETCH_CAMP_ITINERARY' }
        this.props.dispatch(action);
    }

    itemRenderer = ({
        item,
        timelineContext,
        itemContext,
        getItemProps,
        getResizeProps
    }) => {
        const { left: leftResizeProps, right: rightResizeProps } = getResizeProps();
        const status = item.status_id
        const backgroundColor =

            status === 1 ?
                'rgb(173, 151, 237)' :
                status === 2 ?
                    'rgb(247, 121, 136)' :
                    status === 3 ?
                        'rgb(218, 247, 215)' :
                        status === 4 ?
                            'rgb(242, 210, 181)' : 'gray';


        const borderColor = 'black';
        return (
            <div
                {...getItemProps({
                    style: {
                        backgroundColor,
                        color: item.color,
                        borderColor,
                        borderStyle: "solid",
                        borderWidth: 1,
                        borderRadius: 4,
                        borderLeftWidth: itemContext.selected ? 3 : 1,
                        borderRightWidth: itemContext.selected ? 3 : 1
                    }
                })}
            >
                {itemContext.useResizeHandle ? <div {...leftResizeProps} /> : null}

                <div
                    style={{
                        height: itemContext.dimensions.height,
                        overflow: "hidden",
                        paddingLeft: 3,
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                    }}
                >
                    {itemContext.title}
                </div>

                {itemContext.useResizeHandle ? <div {...rightResizeProps} /> : null}
            </div>
        );
    };

    render() {
        console.log(this.props.itinerary);


        let items = this.props.itinerary.itineraries;
        let groups = this.props.itinerary.children;
        return (
            <div>
                {this.props.itinerary.userName !== undefined &&
                    <h1>{this.props.itinerary.userName.full_name}'s Itinerary</h1>}
                {/* {JSON.stringify(this.props.itinerary)} */}
                {this.props.itinerary.itineraries !== undefined &&
                    <Timeline
                        groups={groups}
                        items={items}
                        // default time is set to display May through Aug
                        defaultTimeStart="1556723865000"
                        defaultTimeEnd="1567351065000"
                        canMove={false}
                        canResize={false}
                        itemRenderer={this.itemRenderer}
                        lineHeight={50}
                        itemHeightRatio={.75}
                        sidebarContent={<div>Itinerary</div>}
                    />}
                <p>To zoom the calendar view out, click on the red bar in the header. To zoom in, click on the date detail bar.</p>
            </div>

        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    itinerary: reduxStore.setCampItinerary.setCampItinerary,
});

export default connect(mapReduxStoreToProps)(Itinerary);