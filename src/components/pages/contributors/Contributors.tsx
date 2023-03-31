import ContributorCard from '../../elements/cards/ContributorCard';
import ErgoImage from '../../../assets/ergo.png';
import MilkomedaImage from '../../../assets/milkomeda.png';
import DcSparkImage from '../../../assets/dcSpark.png';
import ThespianImage from '../../../assets/thespian.png';
import VacuumLabsImage from '../../../assets/vacuumlabs.svg';
import BloxicoImage from '../../../assets/bloxico.svg';
import AossieImage from '../../../assets/aossie.webp';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper';

interface Props {
	slidesPerView: number
}

export default function Contributors (props: Props): JSX.Element {
	return (
		<div className="py-20 my-20 items-center" id="contributors">
			<h4 className='dappsSubtitle my-3'>Community</h4>
			<h2 className='dappsTitle mb-20'>Contributors</h2>
			{/* <div className='item-center align-middle justify-center'>
				<p className='contactParagraph my-10'>We are glad that we have partners who have recognized our values.</p>
			</div> */}
			<Swiper        
				autoplay={{
					delay: 2000,
					disableOnInteraction: false,
				}} 
				watchSlidesProgress={true} 
				slidesPerView={props.slidesPerView} 
				pagination={{
					type: 'progressbar',
				}}
				navigation={false}
				modules={[Pagination, Navigation, Autoplay]}
				className="mySwiper">
				<SwiperSlide>
					<ContributorCard contributor="Ergo" imageSrc={ErgoImage} contributorWeb="https://ergoplatform.org/en/" />
				</SwiperSlide>
				<SwiperSlide>
					<ContributorCard contributor="dcSpark" imageSrc={DcSparkImage} contributorWeb="https://www.dcspark.io/" />
				</SwiperSlide>
				<SwiperSlide>
					<ContributorCard contributor="Milkomeda" imageSrc={MilkomedaImage} contributorWeb="https://milkomeda.com/" />
				</SwiperSlide>
				<SwiperSlide>
					<ContributorCard contributor="VacuumLabs" imageSrc={VacuumLabsImage} contributorWeb="https://vacuumlabs.com/" />
				</SwiperSlide>
				<SwiperSlide>
					<ContributorCard contributor="Bloxico" imageSrc={BloxicoImage} contributorWeb="https://bloxico.com/" />
				</SwiperSlide>
				<SwiperSlide>
					<ContributorCard contributor="Aossie" imageSrc={AossieImage} contributorWeb="https://www.aossie.org/" />
				</SwiperSlide>
				<SwiperSlide>
					<ContributorCard contributor="Thespian" imageSrc={ThespianImage} contributorWeb="https://www.thespian.eu/" />
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
