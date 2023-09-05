import React from 'react';
import PropTypes from 'prop-types'

class NotificationItem extends Component {
    shouldComponentUpdate(nextProps) {
        return (
            nextProps.id !== this.props.id ||
            nextProps.type !== this.props.type ||
            nextProps.html !== this.props.type ||
            nextProps.value !== this.props.value
        );
    }

    handleClick = () => {
        const { markAsRead, id } = this.props;
        if (markAsRead) {
            markAsRead(id);
        }
    };

    render() {
        const {type = 'default', html, value } = this.props;
        return (
            <li data-notification-type={type} onClick={this.handleClick}>
                {value && <p>{value}</p>}
                {html && <div dangerouslySetInnerHTML={{ __html: html.__html}} />}
            </li>
        );
    }
}

NotificationItem.PropTypes = {
    id: PropTypes.number.isRequired,
    type: PropTypes.string,
    html: PropTypes.shape({
        __html: PropTypes.string.isRequired,
    }),

    value: PropTypes.string.isRequired,
    markAsRead: PropTypes.func, // Add markAsRead as a prop
};

export default NotificationItem;