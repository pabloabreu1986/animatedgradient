import React from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    StatusBar,
    useWindowDimensions
} from 'react-native'
import { Canvas, LinearGradient, Rect, vec } from '@shopify/react-native-skia'
import Icon from 'react-native-vector-icons/Ionicons'
import {
    useDerivedValue,
    useSharedValue,
    withTiming
} from 'react-native-reanimated'
import { getRandomColor } from '../libs/utils'

export const ColorsScreen = () => {
    const { width, height } = useWindowDimensions()

    const leftColor = useSharedValue('red')
    const rightColor = useSharedValue('blue')

    const colors = useDerivedValue(() => {
        return [leftColor.value, rightColor.value]
    }, [])

    return (
        <>
            <StatusBar hidden />
            <Canvas style={{ flex: 1 }}>
                <Rect x={0} y={0} width={width} height={height}>
                    <LinearGradient
                        start={vec(0, 0)}
                        end={vec(width, height)}
                        colors={colors}
                    />
                </Rect>
            </Canvas>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => {
                    leftColor.value = withTiming(getRandomColor())
                    rightColor.value = withTiming(getRandomColor())
                }}
            >
                <Icon name="shuffle" size={32} color={'#fff'} />
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        bottom: 52,
        right: 32,
        height: 60,
        width: 60,
        borderRadius: 30,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6
    },
    text: {}
})
