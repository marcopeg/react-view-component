/* eslint-disable */

var View = ReactViewComponent;

var styles = {
    demo: {
        border: '1px dashed #aaa',
        marginBottom: '2em',
    },
};

var lorem1 = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';

class DemoApp extends React.Component {
    render() {
        return (
            <div>
                <div className="page-header">
                    <h1>View Component</h1>
                </div>

                <h5>{'View'}</h5>
                <div style={styles.demo}>
                    <View color="#eee">this is just a view</View>
                </div>

                <h5>{'View - box size'}</h5>
                <div style={styles.demo}>
                    <View color="#eee" width={100}>{'width=100px'}</View>
                    {'-'}
                    <View color="#eee" height={100}>{'height=100px'}</View>
                    {'-'}
                    <View color="#eee" width={100} height={100}>{'100px/100px'}</View>
                </div>

                <h5>{'View - margin'}</h5>
                {/* MARGIN PROPERTIES:
                    margin
                    marginTop
                    marginRight
                    marginBottom
                    marginLeft
                */}
                <div style={styles.demo}>
                    <View
                        color="#ddd"
                        width={100}
                        height={100}
                        margin={10}>{'100px/100px'}</View>
                </div>

                <h5>{'View - padding'}</h5>
                {/* PADDING PROPERTIES:
                    padding
                    paddingTop
                    paddingRight
                    paddingBottom
                    paddingLeft
                */}
                <div style={styles.demo}>
                    <View
                        color="#ddd"
                        width={100}
                        height={100}
                        padding={10}>{'100px/100px'}</View>
                </div>

                <h5>{'View - border'}</h5>
                {/* BORDER PROPERTIES:
                    border
                    borderTop
                    borderRight
                    borderBottom
                    borderLeft
                    borderRadius
                */}
                <div style={styles.demo}>
                    <View
                        color="#ddd"
                        width={100}
                        height={100}
                        border="1px solid black">{'100px/100px'}</View>
                </div>

                <h5>{'View - composed properties (centered content)'}</h5>
                <div style={styles.demo}>
                    <View
                        color="#ddd"
                        contentColor="#aaa"
                        width={250}
                        height={150}
                        border="1px solid black"
                        borderRadius={5}
                        margin={10}
                        padding={10}
                        center>{'250px/150px'}</View>
                </div>


                <div className="page-header">
                    <h1>Nested Views</h1>
                </div>

                <h5>{'Vertical Flex'}</h5>
                <div style={styles.demo}>
                    <View
                        color="red"
                        width={150}
                        height={250}>
                        <View flex={40} color="#ddd">{'header - 40px'}</View>
                        <View flex={1} color="#eee">{'body - fill space'}</View>
                        <View flex={0.25} color="#ddd">{'footer - 25%'}</View>
                    </View>
                </div>

                <h5>{'Horizontal Flex'}</h5>
                <div style={styles.demo}>
                    <View horizontal
                        color="#ddd"
                        width={350}
                        height={150}>
                        <View flex={40} color="#ddd">{'left - 40px'}</View>
                        <View flex={1} color="#eee">{'center - fill space'}</View>
                        <View flex={0.25} color="#ddd">{'right - 25%'}</View>
                    </View>
                </div>

                <h5>{'Deep Nesting'}</h5>
                <div style={styles.demo}>
                    <View
                        color="#fff"
                        width={400}
                        height={500}>
                        <View flex={60} color="#ddd" align="middleLeft" paddingLeft={10}>
                            <h3>Awesome Website</h3>
                        </View>
                        <View flex={1} horizontal color="#eee">
                            <View flex={0.35} borderRight="1px solid #fff">Menu</View>
                            <View flex={1} borderLeft="1px solid #aaa" padding={10}>
                                <View flex={0.75} color="#fff" borderRadius={10}>
                                    <View flex={30} paddingLeft={10}>
                                        <h4>Article Title</h4>
                                    </View>
                                    <View flex={1} padding={10} scroll="mobile">
                                        <p>{lorem1}</p>
                                        <p>{lorem1}</p>
                                        <p>{lorem1}</p>
                                        <p>{lorem1}</p>
                                        <p>{lorem1}</p>
                                        <p>{lorem1}</p>
                                        <p>{lorem1}</p>
                                        <p>{lorem1}</p>
                                        <p>{lorem1}</p>
                                        <p>{lorem1}</p>
                                        <p>{lorem1}</p>
                                    </View>
                                </View>
                                <View flex={1} horizontal>
                                    <View flex={1} center childrenWidth={1} paddingRight={2}>
                                        <img src="https://i.kinja-img.com/gawker-media/image/upload/xqkbwkexcl7udc5va7pn.jpg" className="img-responsive" />
                                    </View>
                                    <View flex={1} center childrenWidth={1} paddingLeft={2}>
                                        <img src="http://www.petresortwillowwood.com/wp-content/uploads/2013/01/dogs-playing.jpg" className="img-responsive" />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View flex={25} color="#aaa" borderTop="1px solid #444" borderBottom="1px solid #444" center>News Stripe</View>
                        <View flex={60} horizontal color="#ddd">
                            <View flex={1} center>Btn1</View>
                            <View flex={1} center>Btn2</View>
                            <View flex={1} center>Btn3</View>
                            <View flex={1} center>Btn4</View>
                        </View>
                    </View>
                </div>


            </div>
        );
    }
}

ReactDOM.render(<DemoApp />, document.getElementById('app'));