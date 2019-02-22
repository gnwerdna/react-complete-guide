import React from 'react';
// const withClass = (WrappedComponents, className) => {
//     return (props) => (
//         <div className={className}>
//             <WrappedComponents {...props} />
//         </div>
//     )
// }
const withClass = (WrappedComponents, className) => {
    const WithClass = class extends React.Component {
        render() {
            return (
                <div className={className}>
                    <WrappedComponents ref={this.props.forwardedRef} {...this.props} />
                </div>
            );
        }
    }

    return React.forwardRef((props, ref) => {
        return <WithClass {...props} forwarded={ref}/>
    });
}

export default withClass