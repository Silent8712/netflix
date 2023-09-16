import './footer.scss'
import Netflix from '../../assets/Netflix_2015_logo.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="Line">
        </div>
      <div className="Question">
        <img src={Netflix} alt="" />
      </div>
      <div className="Links">
             <div className="First_row">
                <span>FAQ</span>
                <span>Investor Relation</span>
                <span>Ways to Watch</span>
                <span>Corporate Information</span>
                <span>Netflix Originals</span>
             </div>
             <div className="Second_row">
                <span>Help Center</span>
                <span>Jobs</span>
                <span>Terms of Use</span>
                <span>Contact Us</span>
             </div>
             <div className="Third_row">
                <span>Accounts</span>
                <span>Redeem Gift Cards</span>
                <span>Ways to Watch</span>
                <span>Corporate Information</span>
             </div>
             <div className="Fourth_row">
                <span>Media Center</span>
                <span>Buy Gift Cards</span>
                <span>Cookie Preference</span>
                <span>Legal Notices</span>
             </div>
        </div>
    </div>
  )
}

export default Footer
