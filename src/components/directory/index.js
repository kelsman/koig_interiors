import React, { Component } from 'react';
import './style.scss';
import { withRouter } from 'react-router-dom'

class Directory extends Component {
    render() {
        const { history } = this.props
        return (
            <main className="directory">

                <div>
                    <div className="department">
                        <h3> Shop by Department</h3>

                    </div>

                    <div className="lists">
                        <div className="furniture" onClick={() => history.push('/furniture')}>
                            <img src="https://cdn.shopify.com/s/files/1/0192/1043/6708/products/alausa-sofas-10779697840228_256x256.jpg?v=1560258606" alt="" />

                            <h4> living room furniture </h4>

                        </div>

                        <div className="accent-chairs" onClick={() => history.push('/accent-chairs')}>

                            <img src="https://i.ibb.co/yWbL57F/photo-1541533260371-b8fc9b596d84.jpg" alt="" />

                            <h4> accent chairs </h4>

                        </div>

                        <div className="outdoor" onClick={() => history.push('/outdoor')}>

                            <img src="https://secure.img1-fg.wfcdn.com/im/92522723/resize-h260-w260%5Ecompr-r85%5Etransparent/1069/106935815/default_name.png" alt="" />

                            <h4> outdoor </h4>

                        </div>
                        <div className="rugs" onClick={() => history.push('/rugs')}>

                            <img src="https://secure.img1-fg.wfcdn.com/im/15436927/resize-h310-w310%5Ecompr-r85/1179/117948350/Handmade+Flatweave+Jute/Sisal+Tan+Area+Rug.jpg" alt="" />

                            <h4> rugs</h4>

                        </div>
                        <div className="lightening" onClick={() => history.push('/lightening')}>

                            <img src="https://secure.img1-fg.wfcdn.com/im/09145006/resize-h348-w348%5Ecompr-r85%5Etransparent/1217/121759404/default_name.png" alt="" />

                            <h4> lightening</h4>

                        </div>
                        { /*<div className="office" onClick={() => history.push('/home-office')}>

                            <img src="https://secure.img1-fg.wfcdn.com/im/88422644/resize-h260-w260%5Ecompr-r85%5Etransparent/1138/113820673/default_name.png" alt="" />

                            <h4> Home Office</h4>

        </div>*/}


                    </div>




                </div>

            </main>
        )
    }
}

export default withRouter(Directory);