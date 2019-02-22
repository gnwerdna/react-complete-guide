import React from 'react';
// const withClass = (WrappedComponents, className) => {
//     return (props) => (
//         <div className={className}>
//             <WrappedComponents {...props} />
//         </div>
//     )
// }
const withClass = (WrappedComponents, className) => {
    return class extends React.Component {
        render() {
            return (
                <div className={className}>
                    <WrappedComponents {...this.props} />
                </div>
            );
        }

    }
}

export default withClass