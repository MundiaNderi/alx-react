import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    notificationItem: {
        cursor: 'pointer',
        padding: '10px 8px', // Adjusted padding
        fontSize: '20px', // Set font size to 20px
        borderBottom: '1px solid black',
        width: '100%',
        ':hover': {
            backgroundColor: '#f5f5f5',
        },
    },
    default: {
        color: '#210a61',
    },
    urgent: {
        color: '#e01d3f',
    },
});

class NotificationItem extends Component {
    shouldComponentUpdate(nextProps) {
        return (
            nextProps.id !== this.props ||
            nextProps.type !== this.props.type ||
            nextProps.html !== this.props.html ||
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
        const { type= 'default', html, value } = this.props;
        const itemStyles = [styles.notificationItem];
        if (type === 'urgent') {
            itemStyles.push(styles.urgent);
        } else {
            itemStyles.push(styles.default);
        }

        return (
        <li
            className={css(...itemStyles)}
            data-notification-type={type}
            onclick={this.handleClick}
            >
                {value && <p>{value}</p>}
                {html && <div dangerouslySetInnerHTML={{ __html: html.__html}} />}
            </li>
        );
    }
}

NotificationItem.propTypes = {
    id: PropTypes.number.isRequired,
    type: PropTypes.string,
    html: PropTypes.shape({
        __html: PropTypes.string.isRequired,
    }),
    value: PropTypes.string.isRequired,
    markAsRead: PropTypes.func,
};

export default NotificationItem;