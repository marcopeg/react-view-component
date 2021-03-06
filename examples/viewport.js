/* eslint-disable */

// Just take a shortcut name
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

        var menu = [];
        for (var i = 1; i <= 100; i++) {
            menu.push(
                <View
                    key={'menu' + i}
                    height={40}
                    width={1}
                    padding={10}
                    borderBottom="1px solid black"
                    align="middleLeft"
                    >Option {i}</View>
            );
        }

        return (
            <View viewport color="#fff">
                <View flex={80} color="#ddd" align="middleLeft" paddingLeft={10}>
                    <h3>Awesome Website</h3>
                </View>
                <View flex={1} horizontal color="#eee">
                    <View flex={0.25} borderRight="1px solid #fff" color="#ddd">
                        <View flex={40} paddingLeft={10} paddingTop={10}>
                            <h4>Menu</h4>
                        </View>
                        <View flex={1} scroll="mobile">
                            {menu}
                        </View>
                    </View>
                    <View flex={1} borderLeft="1px solid #aaa" borderTop="1px solid #aaa">
                        <View flex={0.8} color="#fff" border="4px solid #aaa" margin={10}>                            
                            <View flex={40} paddingLeft={10}>
                                <h4>Article Title</h4>
                            </View>
                            <View flex={1} scroll="mobile">
                                <View padding={10} paddingTop={0}>
                                    <p>{lorem1}</p>
                                    <p>{lorem1}</p>
                                    <p>{lorem1}</p>
                                    <p>{lorem1}</p>
                                    <p>{lorem1}</p>
                                </View>
                                <View width={1} height={50} borderTop="1px solid #aaa" color="#aaa" borderBottom="1px solid #aaa" horizontal>
                                    <View flex={1} center>Btn1</View>
                                    <View flex={1} center>Btn2</View>
                                </View>
                                <View padding={10}>
                                    <p>{lorem1}</p>
                                    <p>{lorem1}</p>
                                    <p>{lorem1}</p>
                                    <p>{lorem1}</p>
                                    <p>{lorem1}</p>
                                </View>
                                <View width={1} height={50} borderTop="1px solid #aaa" color="#aaa" horizontal>
                                    <View flex={1} center>Btn1</View>
                                    <View flex={1} center>Btn2</View>
                                    <View flex={1} center>Btn3</View>
                                    <View flex={1} center>Btn4</View>
                                </View>
                            </View>
                        </View>
                        <View flex={1} horizontal>
                            <View flex={1} margin={10} marginRight={8} shadow="1px 1px 8px #444" border="1px solid #fff" borderRadius={5}>
                                <img src="https://i.kinja-img.com/gawker-media/image/upload/xqkbwkexcl7udc5va7pn.jpg" className="img-responsive" />
                            </View>
                            <View flex={1} margin={10} marginLeft={8} shadow="1px 1px 8px #444" border="1px solid #fff" scroll>
                                <img src="http://www.petresortwillowwood.com/wp-content/uploads/2013/01/dogs-playing.jpg" _className="img-responsive" />
                            </View>
                        </View>
                    </View>
                </View>
                <View flex={30} color="#aaa" borderTop="1px solid #444" borderBottom="1px solid #444" center>News Stripe</View>
                <View flex={60} horizontal color="#ddd">
                    <View flex={1} center>Btn1</View>
                    <View flex={1} center>Btn2</View>
                    <View flex={1} center>Btn3</View>
                    <View flex={1} center>Btn4</View>
                </View>
            </View>
        );
    }
}

// Set timeout is needed to compute a correct screen size on iOS
setTimeout(() => ReactDOM.render(<DemoApp />, document.getElementById('app')));

// Prevent body scroll on iOS and Android Home Screen Apps
View.noScroll();