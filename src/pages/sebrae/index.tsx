
import { useIdContext } from '../../config/idContext';
import './index.scss'

export const Sebrae = () => {
  const { id, setId } = useIdContext();

  return (
    <div className='content-page-sebrae'>
      <button className='btn-close-page' onClick={() => setId('')}>
        <i className='icon-Dribble' />
      </button>
      <h1 className='title-page'>Sebrae</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec commodo elit, eget vehicula nulla. Nullam vitae turpis quam. Mauris orci arcu, mollis nec tincidunt dignissim, vulputate in ipsum. Proin pulvinar luctus volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam feugiat, magna vel maximus tristique, ex massa fermentum tellus, sed efficitur nisi ipsum non augue. Vivamus eget aliquam velit. Etiam risus tellus, malesuada ac justo id, fringilla porta metus. Quisque et tincidunt erat. Donec aliquet feugiat neque, ut rutrum ante pellentesque vitae.

        Integer tellus eros, hendrerit sed pellentesque non, luctus et felis. Pellentesque eu venenatis libero. Proin fermentum porta ullamcorper. Ut vestibulum nibh a sem dapibus, nec vulputate est blandit. Sed dolor nisl, mattis ac dictum et, mollis vitae nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec id vestibulum augue. Nullam neque mauris, viverra vitae magna vitae, imperdiet laoreet quam. Aliquam eu justo nec lacus molestie rhoncus eu sit amet ipsum. Sed porta metus a sem egestas, eu efficitur mauris aliquet. Aenean et ante eget erat ornare vehicula eu vitae arcu.

        Etiam lacinia magna nec elit fringilla ornare. Fusce rhoncus justo et magna semper, eu convallis ipsum malesuada. Vivamus vel gravida orci. Proin consectetur magna a fringilla sagittis. Etiam sagittis, nibh eu laoreet maximus, nunc urna efficitur massa, at feugiat purus ipsum in felis. Mauris bibendum quis velit non sagittis. Donec pretium eros nec velit auctor, vel bibendum metus rhoncus. Sed euismod tristique quam et aliquet. Nulla pretium porta lorem vitae aliquet.

        Pellentesque enim turpis, sagittis in placerat non, sagittis a quam. Curabitur laoreet felis id metus vulputate, ut laoreet nisl cursus. Morbi egestas enim vel orci gravida, eget elementum orci pulvinar. Etiam venenatis facilisis neque, vitae posuere sem varius vitae. Ut id nibh non lorem sodales auctor ut vel velit. Integer vel arcu ut dui finibus auctor sed at neque. Donec vel mi lacus. Phasellus eu est nec ipsum varius elementum auctor eu tortor. Nunc sollicitudin rhoncus viverra. Praesent pharetra efficitur velit vitae auctor. Pellentesque lobortis euismod risus eu facilisis. Sed tincidunt, augue eget aliquam elementum, nibh erat laoreet augue, sed dapibus dolor tellus eu ipsum. Proin et ex eros. Nam ornare consequat felis eget condimentum. In ac ipsum quis arcu luctus volutpat eu et dui. Mauris rhoncus odio ante, et rutrum dui lobortis vel.

        Morbi tincidunt mi condimentum, tristique ex vitae, iaculis mi. Mauris tincidunt quam ac rhoncus volutpat. Nunc ullamcorper, ante vitae egestas vulputate, orci dui faucibus massa, et luctus nisl urna quis augue. Integer egestas risus cursus venenatis rutrum. Cras nec dui ligula. Vivamus pulvinar dapibus mi, nec luctus dolor euismod efficitur. Nam vitae placerat arcu. Ut sed aliquam augue. Fusce ex urna, blandit aliquam pretium non, laoreet at urna. Phasellus dignissim sem velit, ac pellentesque ligula interdum nec. Morbi non consequat orci. Mauris ex erat, lacinia vel euismod et, condimentum eget risus. Suspendisse posuere, erat eu vestibulum faucibus, orci est lacinia mi, ac maximus nisi lacus a quam.</p>
    </div>
  )
}
