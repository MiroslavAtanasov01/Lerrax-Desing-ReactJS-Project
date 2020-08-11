import React, { Component } from 'react'
import styles from './index.module.css'
import mainImg from '../../images/Feb-20-marquees1 placeholdr.jpg'
import mainImg1 from '../../images/Feb-20-marquees3.jpg'
import mainImg2 from '../../images/Feb-20-marquees4.jpg'
import mainImg3 from '../../images/Feb-20-marquees5.jpg'
import { withRouter } from "react-router-dom";
import Dots from '../dots'


class MainImg extends Component {
    constructor(props) {
        super(props)

        const images = [mainImg, mainImg1, mainImg2, mainImg3]
        const types = ['beds', 'chairs', 'tables', 'sofas']

        this.state = {
            images,
            types,
            currentImg: 0,
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.changeBackgroundImage(), 5000);
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    changeBackgroundImage() {
        let newCurrentImg = 0;
        const { images, currentImg } = this.state;
        const noOfImages = images.length;

        if (currentImg !== noOfImages - 1) {
            newCurrentImg = currentImg + 1;
        }

        this.setState({ currentImg: newCurrentImg });
    }

    onClick(type) {
        this.props.history.push(`/${type}`)
    }

    onClickDot(type) {
        this.setState({ currentImg: type });
    }

    render() {
        const { images, currentImg, types } = this.state;

        return (
            <div className={styles.container}>
                <img alt='mainImage' className={styles.mainImg} src={images[currentImg]} onClick={() => this.onClick(types[currentImg])} ></img>
                <div className={styles['inner-container']}>
                    <Dots onClick={() => this.onClickDot(0)} />
                    <Dots onClick={() => this.onClickDot(1)} />
                    <Dots onClick={() => this.onClickDot(2)} />
                    <Dots onClick={() => this.onClickDot(3)} />
                </div>
            </div>
        )
    }
}

export default withRouter(MainImg)