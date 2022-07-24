import React, { useEffect, useContext } from 'react'
import useOnScreen from '../../hooks/useOnScreen'
import { InteractionContext } from '../../context APIs/interactionAPI'
import {LelouchAvater, KallenStadtfeldAvater, NunnallyAvater, C2Avater, ShirleyFenetteAvater, SuzakuKururugiAvater} from '../../assests';
import './testimonialStyle.js'
import {GlobalStyles} from './testimonialStyle'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

const data = [
	{
		image: LelouchAvater,
		cliantName: 'Lelouch Lamperouge',
		review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis temporibus consequatur eos doloribus saepe? Incidunt nihil, magni ex nesciunt omnis atque placeat a, aperiam vero officiis, esse ut id reiciendis?'
	}, {
		image: ShirleyFenetteAvater,
		cliantName: 'Shirley Fenette',
		review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero ut fugit id nihil omnis hic iusto dignissimos beatae veritatis dolor velit voluptatibus asperiores, perferendis minima repellat aperiam. Sequi repellat, vero libero adipisci commodi dolorum quia in saepe, aut tenetur placeat.'
	}, {
		image: SuzakuKururugiAvater,
		cliantName: 'Suzaku Kururugi',
		review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ex temporibus sequi sed velit obcaecati.'
	}, {
		image: KallenStadtfeldAvater,
		cliantName: 'Kallen Stadtfeld',
		review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis temporibus consequatur eos doloribus saepe? Incidunt nihil, magni ex nesciunt omnis atque placeat a, aperiam vero officiis, esse ut id reiciendis?'
	}, {
		image: NunnallyAvater,
		cliantName: 'Nunnally',
		review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consequat omnis atque placeat a, aperiam vero officiis, esse ut id reiciendis?'
	}, {
		image: C2Avater,
		cliantName: 'C.C.',
		review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum provident, sint necessitatibus quibusdam voluptates vel. Vel numquam perspiciatis atque voluptas repellendus hic dolorem. Quod, nemo!'
	},

]

const Testimonial = () => {
	const { setInView } = useContext(InteractionContext);
	const [setRef, visible] = useOnScreen({ threshold: 0.7 });

	useEffect(() => {
		if (visible) {
			setInView('#testimonial')
		}
	}, [setRef, visible])

	return (
		<React.Fragment>
		<GlobalStyles/>
		<section id='testimonial' ref={setRef}>
			<h5>Review from clients</h5>
			<h2>Testimonials</h2>


			<Swiper cssMode={true}
				navigation={true}
				pagination={{clickable: true}}
				modules={[Navigation, Pagination]}
				className="container testimonial__container"
				spaceBetween={40}
			>
				{data.map((item, index) => (
					<SwiperSlide className="testimonial" key={index}>
						<div className="cliant__avater">
							<img src={item.image} alt='Cliant' />
						</div>
						<h5 className='cliant__name'>{item.cliantName}</h5>
						<small className='cliant__review'>{item.review}</small>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
		</React.Fragment>
	)
}

export default Testimonial