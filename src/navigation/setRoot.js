import {Navigation} from "react-native-navigation";

export function setBottomTabs() {
    Navigation.setRoot({
        root: {
            bottomTabs: {
                children: [
                    {
                        stack: {
                            children: [
                                {
                                    component: {
                                        name: 'Home',
                                        options: {
                                            topBar: {
                                                title: {
                                                    text: 'Home',
                                                },
                                            },
                                        },
                                    },
                                },
                            ],
                            options: {
                                bottomTab: {
                                    text: 'Home',
                                    selectedTextColor:'#129ce6',
                                    icon: require('../assets/icons/ic_home.png'),
                                    selectedIconColor: '#129ce6',
                                },
                            },
                        },
                    },

                    {
                        stack: {
                            children: [
                                {
                                    component: {
                                        name: 'Profile',
                                        options: {
                                            topBar: {
                                                title: {
                                                    text: 'Profile',
                                                },
                                            },
                                        },
                                    },
                                },
                            ],
                            options: {
                                bottomTab: {
                                    text: 'Profile',
                                    selectedTextColor:'#129ce6',
                                    icon: require('../assets/icons/ic_user.png'),
                                    selectedIconColor: '#129ce6',
                                },
                            },
                        },
                    },
                    {
                        stack: {
                            children: [
                                {
                                    component: {
                                        name: 'Cart',
                                        options: {
                                            topBar: {
                                                title: {
                                                    text: 'Cart',
                                                },
                                            },
                                        },
                                    },
                                },
                            ],
                            options: {
                                bottomTab: {
                                    text: 'Cart',
                                    selectedTextColor:'#129ce6',
                                    icon: require('../assets/icons/ic_cart.png'),
                                    selectedIconColor: '#129ce6',
                                },
                            },
                        },
                    },
                ],
            },
        },
    });
}
