var View = ReactViewComponent;

var lorem1 = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';

class DemoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            enterAnimation: 'slideDown',
            leaveAnimation: 'slideUp',
            viewportIsVisible: false,
            nestedIsVisible: false,
        };
    }
    render() {

        var animations = ['none', 'fade', 'explode', 'implode', 'slideDown', 'slideUp', 'slideLeft', 'slideRight'].map(a =>
            <option key={a} value={a}>{a}</option>
        );

        return (
            <div>
                <div className="page-header" style={{ marginTop: 0 }}>
                    <h3>Viewport Animations</h3>
                </div>

                {/* Animations Config Panel */}
                <View width={340} height={440} color="#fafafa" border="1px solid #aaa">
                    <View flex={60} horizontal borderBottom="1px solid #aaa">
                        <View flex={1} center padding={5}>
                            Enter:<br />
                            <select
                                onChange={e => this.setState({ enterAnimation: e.target.value })}
                                defaultValue={this.state.enterAnimation}>{animations}</select>
                        </View>
                        <View flex={1} center padding={5}>
                            Leave:<br />
                            <select
                                onChange={e => this.setState({ leaveAnimation: e.target.value })}
                                defaultValue={this.state.leaveAnimation}>{animations}</select>
                        </View>
                    </View>
                    <View flex={60} horizontal borderBottom="1px solid #aaa">
                        <View flex={1} center padding={5} borderRight="1px solid #aaa">
                            <span
                                className="btn btn-link"
                                onClick={() => this.setState({viewportIsVisible:true})}>Open New Viewport</span>
                        </View>
                        <View flex={1} center padding={5}>
                            <span
                                className="btn btn-link"
                                onClick={() => this.setState({nestedIsVisible:true})}>Open Nested View</span>
                        </View>
                    </View>


                    <View flex={1}>
                        <View
                            flex={1}
                            isVisible={this.state.nestedIsVisible}
                            enterAnimation={this.state.enterAnimation}
                            leaveAnimation={this.state.leaveAnimation}
                            center
                            color="#ddd">
                            
                            {/* this is a nested view which is dynamicly displayed */}
                            <View flex={1}>
                                <View flex={50} center>
                                    <h4>Nested Viewport</h4>
                                </View>
                                <View flex={50} center>
                                    <span
                                        className="btn btn-success"
                                        onClick={() => this.setState({nestedIsVisible:false})}>Close</span>
                                </View>
                                <View flex={1} scroll borderTop="1px solid #aaa" marginTop={10} padding={10} color="#fafafa">
                                    <p>{lorem1}</p>
                                    <p>{lorem1}</p>
                                    <p>{lorem1}</p>
                                    <p>{lorem1}</p>
                                    <p>{lorem1}</p>
                                    <p>{lorem1}</p>
                                </View>
                            </View>

                        </View>
                    </View>
                </View>

                
                {/* Dynamic Viewport */}
                <View viewport
                    isVisible={this.state.viewportIsVisible}
                    enterAnimation={this.state.enterAnimation}
                    leaveAnimation={this.state.leaveAnimation}
                    color="rgba(255, 255, 255, 0.95)"
                    border="3px solid #4086FF"
                    padding={0.1}
                    paddingTop={0.5}>

                    <View flex={90}>
                        <h4>Animated Viewport</h4>
                        <span
                            className="btn btn-success"
                            onClick={() => this.setState({viewportIsVisible:false})}>Close</span>
                    </View>
                    <View flex={1} scroll color="#fafafa" border="1px solid #aaa" borderRadius={5} padding={10}>
                        <p>{lorem1}</p>
                        <p>{lorem1}</p>
                        <p>{lorem1}</p>
                        <p>{lorem1}</p>
                        <p>{lorem1}</p>
                        <p>{lorem1}</p>
                    </View>
                </View>


            </div>
        );
    }
}

setTimeout(() => ReactDOM.render(<DemoApp />, document.getElementById('app')));
