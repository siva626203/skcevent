/* eslint-disable @next/next/no-img-element */
import { React,Fragment, useEffect, useState } from 'react'
// import Footer from './component/footer';
import { useSelector, useDispatch } from 'react-redux';
// import { logout,login } from '../features/user';
// import "../css/scrollani.css"
// import "../animation/ani.js"
import axios from 'axios'
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Homepage=()=>{
  const dispatch=useDispatch()
  const [name,setUsername]=useState()
  const [email,setEmail]=useState()
  const age=18;
    const user=useSelector(state => state.user.value);
    const register=useSelector(state=>state.register.value)
    return<div className='home'>
      
      <div>
      <img
          className="image-icon1"
          src="https://lh3.googleusercontent.com/woKa7kIbd_xpqonrT4ggA9knyZtUeD2bfcu0AHZe52GVCzh3IcY11h-bt-h8tgbJBfyAjLz83jmAhN1sn-eQNueobKKJirA9yRc1C7i0ypRqDReTKVetXMVtTE60blGlC0gL8QKDaraHb9JVjPFYjspTCIl8v8aadtsGw6BL4oQkbskBErt4FsMzelXxz7z6MYPr0imp5YiEjmrpUbsAJx-sWzID_ne2s6zqHTi-kb_NNb0GhRqXbbGeyQrPGGEUfR4NCEMy3to4wFlPcSrbSo6TSYeU3lRLN5WcMt706cI2qdyNuBjchGI427MwrpahWx6GCBrgSEFWlqPySnVbasN-TvMdPPrX_cBVGzHdrJkrHrGL97BZMVsnmp9-aQKJh5_U0tYD5NVkOvPYDqOr6OYZE8zUXHFFGAk-FCS_J2SJuwkzhVotY2nwruleh8WsabW7m-XFo_TPsTKUtrx8cMvhMy4r1rgXDC931vVKO4-fx1Gj1MQz-uD2EdtUNEtbasJBqJySw9TrHJ134LVfBhEzpEIKnkQGgNWalGZsfUxQZhsfzho_sgZxDtMIiDjvxBPm2L631z2-n3PuAwWCvBWxSxE9SrzioXvJZmOkxct8y29Sc_TSAxP3En_yULL_ZVyrjDdnlrAhCWzKBpPhXyTURxh_PrD-IyfpT5yFEVWk5N6KpSgrzuzZ0rm2728UKEFVO1aPZd33JYOP_WHKixk4FUGNbM2CTVAzqzNHNajumUrFjOUzjZ3URm5W0Sj34diqfF_fNOVoxeJvZNBl-VBd2unaRL5Nh_mTuokXwDL-icq3A9pQSzSECqeDfMymzDVsb0pyWI3XKDMXRK0Jkurovr3evQbWoqrU1bC3shuoELDHY3ocEbXh-rTNWU6yQOmyBZm0QDirWdmp0Un7oalg16iQvT0ecbsOuSYeDVIWe8KXTeHys_5QdJ8VeExcLooUGlEXMPMsCDgcgM9VdUOZtIhm4xaFTsk-XO6N-bQKtlfKC5JbVA=w1553-h241-no?authuser=0"
        />
      
      {/* <img
          className="image-icon2"
          src="https://lh3.googleusercontent.com/F86G3LCj_ummVonVs8w69_xcvhuda4DXSnwFdN8e0zg79QJ2HJDGfHbHx-rv0a3L1Ce0pBcAOyQN5AcJjHC-1_I4rEjjL0O2PX5WT6mquTJVP6ZTOWkwfNY41j1Kz92TxBfKxapvYgmQK9cQfFiWDu_W7_L8Vb-HSdTWD7VZ0F07L_zc_hvUHiRR-PQwj6Y81btll2_f2Tm0hjeB7D-u12VkqsXf1wTELmupMYwxzJP15Jl05KecsnNEd0GrMYcK03-uB3O7ewJHifgSanCqdI8_QiNbLUeu03srR3yAQO2ZHhDDeZoLTopWFjNDPBEL3f6Lhhn7EmS40sl-owa6IjrQLAGSi7nZRtSrctW1dksjXwcxieUm57gTyhTBW02T8pHmTdBNyxZ8NCGeGhC4WgrtCE8gypplfEwqGnKokX__5HnTRMC_3tfXkmVI2lYcz85rtXthIUxW0lXesAoEihKQ45CflcG36oc5ALhWNCkILao4p1BFOCrrVyCxd_P-89C-2U4P-jyWBD_fzdQxcmwffPHdD6iC1EFemwhiRzVG5JdbNxYaFjguIVv1VMJPK8kWJR-JcagYorjJDdIh8icKCu6cvN5VeGcWDStFpTMJkWx9ajSH67rHRn5d8kBSQq3jN-hkZ2ZHTRXjbRGD80qtbyQqT-FKRtES4TLQNG3lxjmbSIwh4_OjOvYwowdZXCE5hyMzIV1bOBEOep9Ru-0nKtO7__anqUGyUr1GAKRpqVvQ_kaUu4ppu4pQe_WEHrQhP-DzYG7uOIXdsODO31q_hWtwmt7gJSAeGJiGE5Gn81MeLKEbQ5abFxRM1vNtgVXGXy2FchZYXjOKYKfW6gay7up7W-BOcY45gn5EZLCE-1CSnEQszHll0tuc-jBi-klNVq1tle1lCjSKTRApxQFMfYuLlPo3scyXRvS_XcWyQRX0GNAr6jJBZNh1Ud5T1M0vo2tUQXmNymGgQn-TTwMVEyojM7Biyuunh0bQFmL9VCXwSN1FyQ=w753-h767-no?authuser=0"
        />
      <h1 className='text-center'>SRI KALISWARI College(Autonomous),Sivakasi</h1>
      <h2 className='text-center'>DEPARTMENT OF INFORMATION TECHNOLOGY</h2>
      <h2 className='text-center'>INFOSEA 2K23</h2> */}
      
      </div>
      
     <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          src="https://lh3.googleusercontent.com/SzODMj5tg4JcbausfV-aLLtYjCA0PmH0cKduUoKBqwE-tEFSB-K3duq-RI1BKkKW83ocVY0B5Zw_7Vn1JsN4xCpIqQiqLMcsjuPiDuGdXTXMohVIj8A8Rh_gLORE1Rcy01so1_LTAlJZaIOHREuI8o6iAfRCsrLcBwcGRfzGQ4q_22CnO1x5h_JXSXfakJQWoc_6T7gp9B9Y3QS5bRbLzOYQWe_PiR4JIpJ_CTj_9EzrngZ3XSiMO77TpE96mhI99IUJgmXWkN-61uqUTxBNVIs1bt1bGoGfsD472nhSuGsFWS-9LdMubJR19oSImXAfzUZywsm-sxeTwjTZa_Bzw2Ktz9mWiSwL2blI-JYBYRSiVTXYSnAKM4mtQ90eqIviPoG4bKHiUCg3OXx7hgkt2ZVBjzhm_h0jTiH3NeCzVPsTGP5VuSwPkeclaVwuOPBBC-5inYprjZ3SFTTUp9agJntKwUzDjpGQtSUjCWiqkymPnBYUROVmDrPsv5ZZPlQVIW_zIaQsnPEoyr_bmHSgiCy2bcfVFs9FOX3ys8quns8jSI4d5rkrFqCUFI_n4Bl_UCmisXqkAcZOMzmiZojXrm7jvd2wBcRTCNBaDXX9MXmxc_b-age0DMhqeYfP_Uo6E6W6bRkB0Chs0z3CDiPmoIMI-bp2n7IKBgt7m1uVaZQwL5Au8dbkhB0kb5dTqPqVHQ7nQRTdMLx14QntitFZ0hzBat8K9blT56uKFMaNcHwQQk1NjmBMgdtE0zUwF7sglHd2nkIFspOC2mhmprorKsvN7e5sPcOk5X_bDKKJk3hCRtrcFNlTRfveiSudisSL_qh_-wSyNDo8WecpqwwNiH19ySXeVaz2xXG30n8e1A3VkuOH50xlp9vLiJJR7gJmEgIyq3F6fDv51AiQZL4boJ-DawVwTcz7s4qiTnz3SMr4wxEmJiZ3CTM0_CoAKTKhuGc_v3K576OIJpQnYm-l995K1ctgpERJu95xLAwdMiW8SE7H9XUa=w1244-h933-no?authuser=0"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          src="https://lh3.googleusercontent.com/jf-fRKNZsoa1LGPN8IX1mac_caGPTyOWej2p8fe-yo7qlcAgCHs5veK2Tg4N1NKbk6YAnOZLvg3Bz1RvFnIJ3xuXFiYZpg3Shse7GFu9yh8dQ449sli7zwec7n1qzL9pSXqZwEdI4VPnfMsNIUR3qB2qAb7eFotzOrWYYfNnb_1xgf3Mklh3revwMGmjYt4XXHLIgWLsuI4olnD7ph2tEjKUixRx5yrLTSqF8fEY0WIiKOCtmStmJVgO3_dmEJckIB0jxdQOuJoFYoGX69T5A5nPEPwGQwQtJ5SSU0AVbU20G-y_3w8eRu8YiUKffSw1BNRlXxKj44LWn8IPMSUDWCYTSxOQ4vfyZTqUks9TzPisYsLeu_Grpy_7LIuLW_q4inqpn7K26sslEZ6cagu-_rGDb0HUFqgQ-CR59O78q3IPfyTfUwdaLUWLz6jcqf277rw-DmW6xvEoHc_pXpn2YRhGSmmKn9P_8SdDDC9cXlyyM447nzk_zrFpkFi0drIzMzblL9rGTjrLuwIRQ_rkBxpY3J_2w1f6C9rNRbtMTZLXGlbMwBWWFvwKTXgSL9KWXjAouydk2Cwz0Do_q3qAZLBK38uDXyYwRw1yfZVhvyA3wZCJM1yon0ZZXTQHzLWmrp49NUO_FFSSu8_4LqcK-j_sihCbR03PZyDDVaWtpJT5K694QzBwTjZCt1Mqw53eu2Tcb3N1jEozAEGN9jmWmJX70sNpK1eKBaP72GCkYKGMPGijUz72EVi5i6kgDctq5WFPNiPAXxXpE7bh64GBbejPG9GtuFZ9M8Glm_GWEIF9axRjZx3ymQgYy9kftaVtxV3FcLpFU9UzecGN4K27RK28AOnudf495nkz0yOzR0wGjqrVrxpacJl2lRCyI7HjWWq2m_1ZgfIwxrhTFC-1A5O94wocYiPFBaepce7XFnqwyhxcqYS5k1Y9TmAhG5XUirJ5Nb2TEzI7JC4KUSMyEviucFoQDoziSAEvX2eycm2A8SlKSWZf=w1244-h933-no?authuser=0"
          alt="Second slide"
          
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          src="https://lh3.googleusercontent.com/hFAPiquDQP8vcxwnLdxOmj7xpak69cLwYe7e98w5Juh39hV-6E5f6Vm018Ms0TdWWG2m_reRygK0Sfyl28MWU3ZJe3BQ-ni--mYlCBJfFoChkeYfXgFKT5Gngl7mB5yFIQxHyzax1tCEz-WBZSYlKNOkHGeC5fd_EYjp8FolFxpcKAPwEI0sshHuwIQPRbLAPOHM4Xwez_NPidYSmZ-QQh9NtSKvAMMSxP0B_Wa8u7RB5u0-8UuRS3mwYW-ClNMjIP37aq4Cmfz-jIxYgA912laIzt1Rvfk6imt2dK0n-9s2uNWb0LavIwpHpBLH30yqKMeXbW0O_wi06ayWTyWXInbe-WO3ksyOBJcG2IKEja2uTW1-4apgqhzD5pWfXotCkVuRsgyzND4RQwpUXTZ4b3cUHwKtn_l5nvSmUYcRli1Eh85Z2ldMm5bOYtK_-MhRpBC8Bc6UV-xReXMYsPY8DECaL4goi8oB5oWgvV5_VAc-C-R8Y7bA7EVaWCzjCxNFHLfWpjQBteWY61pP3J2Q4k_1GgkzlegKP4WNese8qg-OcVjDKxN6VreJa2BjzR88ympGW22p0umkQ83ujnWJ4ED0nV0nR0Y05vCy_5-R4XfU2b2OZxL_Tt0oiogjOihrBo4cYA1ACIZsASdrB6C_QMEC0StEBxm-eLyVOfvkv3EcMiTIZeBQan7qPD8DSVQij4cZdEZ-gkJVSlpDbSG0KQ0PvmecmtgCQVdGZsRtkHCvp5a8oPwuDC7SvTwexsMP-UHM-U8MNLFOYEGew5yUs3QG57yRBkB55hV-qPpOKUiM-GFT5kR7f-CPQYd_v6UfbO26AbQlP_ESmKrmis0M2JF6qYWOIJ9lALmLwlx_Kh-J6TZKvYa0zVEcjV8vPKoWKavXtxxHgvDoWRUuA9EOPVIq4uDol-dH1930TJdS0nZPpn0DwfFcmEL2rukBIw5v6UpIJtp3joiNrcRo9KkYSZLdntwLgoTI8XDIDmwsVQaN4x64jdWM=w1244-h933-no?authuser=0"
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
    <br/>
    <br/>
    <img
          className="d-block w-100 rounded"
          src="https://lh3.googleusercontent.com/Dwi0T9jHyBdUF8mOn6whdtWkt0dy78uqpl0XriVR6uimMV-EtW9t3TtDCBg35aNwhan-6M_OiMJGB3Hxp5jjRncj3Xwl7VR91F3FclXS5fUpXkv1IEBXWxSPdbnPPzV9VSsCf6nCB_1pxgZRZXdoxfuGOPenRGb9ERihi5i3m3i5UjZX99mldNI0iL4hm2Q6sgor-G0mn77bT170rGGs7EBz9KjuKO-sa_rJQHgUoSICOHdNBn5MWCYbRepMNL64vOr8z02SJnDPD7bTnT9pQumHuIKK3Hc4QMAbmQnIDOr1edrzjr-UX0uSE1sNEChdGfmbV6UNeQEiTUPkmbhNSJRewwlA3AwKZVFKfS0WDwq8m3R-_wePpLkJEiqiyJdksTTRAFRsDU5W4I8zwjxvPopVI0Kk9ydNNn2ekfYA5x69xOBtiQT30rYLscqsd6YViQjG5JQPgnZye5ryOSwR87GgwqeSZAEQxObI9ho8CWdgnP9z1LU6i0OMhodWbuZBE_BKd-cLJHxmbb_h3939fmrbn9iiBzTUWO-vultUWVLptfYn1nW1zBIVCgjQcMSe2TCPX35BZV_VpOM1ZaQWx4i2GqqaKJyam6PyoGzTDAiFmKsYvNdn5gxP8tcWon6kGRH0PuJMFwr4lJFft4my4V1KyH-eCM8SeZtWXhzIFghV58c-tve3J27vw2zHEVgxG50x0cBhR8M0B6zGdjQQ3xcAt_V4YLcNhPUpi72FDU8Fgo5U4SwTC4sHCvjfZGtvTHhtfyGOsq-kqUIV7h-zy0Njc7Ly7BiNNl5BeJxwJSytw5ivoNKhRgtd9Uz058LvDkfhqzr1Rtm6tx6yuTM8OLHrj5dxGe9B5CyGFsbYH8essGD1PE70P4ELUWHb5AtnrcbRsUV7kNOCIKE44nWJiXkpJYxpdUUoH4hfal2NidzsC8gQYL0u7LqQwKQZ2RmKuiwaGbiAUWavP_nSBZBo7t79KfgOnRoey_FChABsPW_Xx6VVsPYNVQ=w1550-h752-no?authuser=0"
          alt="Third slide"
        />
    <Container>
      <Row className="">
        <Col><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15739.736021220891!2d77.833456!3d9.5144635!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7950cd841f0a4567!2sSri%20Kaliswari%20College!5e0!3m2!1sen!2sin!4v1675400292121!5m2!1sen!2sin" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></Col>
        <Col><p className="address">Sri Kaliswari College ,<br/>GR7M+Q9P,<br/>Virudhunagar Main Road,<br/> Sivakasi, Tamil Nadu 626123</p></Col>
      </Row>
      </Container>
    
      
    <br/>

    </div>
}
export default Homepage;