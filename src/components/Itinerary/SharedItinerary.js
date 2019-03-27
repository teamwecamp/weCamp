import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'react-calendar-timeline/lib/Timeline.css';
import Timeline from 'react-calendar-timeline';
import './Itinerary.css';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

class SharedItinerary extends Component {

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

    componentDidMount = () => {
        this.fetchSharedItinerary();

    }

    fetchSharedItinerary = () => {
        const childId = this.props.match.params.id
        console.log('shared itinary parrams', childId);
        this.props.dispatch({ type: 'FETCH_SHARED_ITINERARY', payload: childId });
        // this.setSharedItinerary();
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
        const bgColor =
            //ternary to determine background color based on itinerary status
            status === 1 ? 'rgb(173, 151, 237)' :
                status === 2 ? 'rgb(247, 121, 136)' :
                    status === 3 ? 'rgb(155, 185, 204)' :
                        status === 4 ? 'rgb(226, 186, 165)' : 'gray';
        // this keeps the background color after the item has been clicked on
        const backgroundColor = itemContext.selected
            ? itemContext.dragging
                ? "red"
                : item.selectedBgColor
            : bgColor;
        const borderColor = 'black';
        return (
            <div
                {...getItemProps({
                    style: {
                        backgroundColor,
                        color: item.color,
                        borderColor,
                        borderStyle: "solid",
                        borderWidth: 2,
                        borderRadius: 3,
                        borderLeftWidth: itemContext.selected ? 3 : 1,
                        borderRightWidth: itemContext.selected ? 3 : 1
                    },
                    onMouseDown: () => {
                        // STRETCH add function to display item details on page 
                        console.log("on item click", item);
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
        console.log(this.props.sharedItinerary);
        let items = this.props.sharedItinerary.itineraries;
        let groups = this.props.sharedItinerary.children;
        return (
            <div>
                {this.props.sharedItinerary.userName !== undefined &&
                    <h1>{this.props.sharedItinerary.userName.title}'s Itinerary</h1>}
                {/* {JSON.stringify(this.props.itinerary)} */}
                {this.props.sharedItinerary.itineraries !== undefined &&
                    <Timeline
                        groups={groups}
                        items={items}
                        // default time is set to display May 1, 2019 through Aug 31, 2019 (UNIX)
                    defaultTimeStart="1556697600000"
                        defaultTimeEnd="1567351065000"
                        canMove={false}
                        canResize={false}
                        itemRenderer={this.itemRenderer}
                        lineHeight={50}
                        itemHeightRatio={.75}
                        sidebarContent={<div>Itinerary</div>}
                    />}
                <table>
                    <tr>
                        <td className="tdInt">interested</td>
                        <td className="tdApp">applied</td>
                        <td className="tdReg">registered</td>
                        <td className="tdWait">waitlisted</td>
                    </tr>
                </table>
                <p>Calendar View Instructions: to zoom out, click on the red bar in the header. To zoom in, click on the date detail bar.</p>
                <p>Click and hold on the calendar, then move the mouse to slide the view.</p>
                {/* <ItineraryShare children={groups} /> */}
            </div>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    sharedItinerary: reduxStore.setSharedItinerary.setSharedItinerary,
});

export default withRouter(connect(mapReduxStoreToProps)(SharedItinerary));