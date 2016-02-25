var View = ReactViewComponent;

var lorem1 = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';



/**
 * This is a CardItem, it wraps a View component
 * and defines some basic options like inherith
 * dimensions and styling stuff;
 */

class CardItem extends React.Component {
    render() {
        return <View {...this.props} />;
    }
}

CardItem.defaultProps = {
    width: 1,
    height: 1,
    center: true,
    color: '#fff',
    borderRadius: 10,
    margin: 10,
};




/**
 * This is the big deal of this example.
 * Here we wrap another view, we decide which animation to apply
 * for showing/hiding cards (we keep an internal state for that)
 */

class CardPanel extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            enterAnimation: props.animation,
            leaveAnimation: props.animation,
        };
    }

    componentWillReceiveProps(nextProps) {
        var currentIndex = this.props.displayCard;
        var nextIndex = nextProps.displayCard;
        var animation = nextProps.animation;

        if (nextIndex < currentIndex) {
            switch (nextProps.animation) {
                case 'slideLeft':
                    animation = 'slideRight';
                    break;
                case 'slideRight':
                    animation = 'slideLeft';
                    break;
                case 'slideUp':
                    animation = 'slideDown';
                    break;
                case 'slideDown':
                    animation = 'slideUp';
                    break;
                default:
                    animation = animation;
                    break;
            }
        }
        
        this.setState({
            enterAnimation: animation,
            leaveAnimation: animation,
        });
    }

    render() {
        var {
            displayCard,
            animation,
            children,
            ...props } = this.props;

        // map the children CardItem components so to define
        // which one is visible
        children = children.map((card, cardIndex) => {
            return React.cloneElement(card, {
                ...this.state,
                isVisible: cardIndex === displayCard,
            });
        });

        return <View {...props} children={children} />;
    }
}

// give the component some default View properties
CardPanel.defaultProps = {
    flex: 1,
    color: '#444',
};





/**
 * This is for making the two custom components behaving
 * like a view
 */
CardPanel = View.nestedView()(CardPanel);
CardItem = View.nestedView()(CardItem);






class DemoApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            animation: 'slideLeft',
            displayCard: 0,
        };

        this.next = () => {
            if (this.state.displayCard < 5) {
                this.setState({
                    displayCard: this.state.displayCard + 1,
                });
            }
        };

        this.prev = () => {
            if (this.state.displayCard > 0) {
                this.setState({
                    displayCard: this.state.displayCard - 1,
                });
            }
        };
    }

    render() {

        var animations = ['none', 'fade', 'slideLeft', 'slideRight', 'slideDown', 'slideUp', 'explode'].map(a =>
            <option key={a} value={a}>{a}</option>
        );

        return (
            <div>
                <div className="page-header" style={{ marginTop: 0 }}>
                    <h3>CardPanel <small>Custom Component</small></h3>
                </div>

                {/* Animations Config Panel */}
                <View width={340} height={440} color="#fafafa" border="1px solid #aaa">
                    <View flex={60} horizontal borderBottom="1px solid #aaa">
                        <View flex={1} align="middleRight" padding={5}>
                            Animation:
                        </View>
                        <View flex={1}  align="middleLeft" padding={5}>
                            <select
                                onChange={e => this.setState({ animation: e.target.value })}
                                defaultValue={this.state.animation}>{animations}</select>
                        </View>
                    </View>
                    <View flex={60} horizontal borderBottom="1px solid #aaa">
                        <View flex={1} center padding={5} borderRight="1px solid #aaa">
                            <span
                                className="btn btn-link"
                                onClick={this.prev}>&laquo; Prev</span>
                        </View>
                        <View flex={1} center padding={5}>
                            <span
                                className="btn btn-link"
                                onClick={this.next}>Next &raquo;</span>
                        </View>
                    </View>

                    <CardPanel {...this.state}>
                        <CardItem>Card1</CardItem>
                        <CardItem>Card2</CardItem>
                        <CardItem>Card3</CardItem>
                        <CardItem>Card4</CardItem>
                        <CardItem>Card5</CardItem>
                        <CardItem>Card6</CardItem>
                    </CardPanel>

                </View>

            </div>
        );
    }
}





setTimeout(() => ReactDOM.render(<DemoApp />, document.getElementById('app')));
