import s from './News.module.css'

let News = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.news}>
				<div className={s.title}>@ This news was added 3 hours ago</div>
				<div className={s.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet facere voluptatem asperiores vero, culpa non sed voluptate dignissimos cumque repudiandae quae recusandae magnam nobis porro perspiciatis repellat hic quod neque dicta nesciunt. Id, et. Laboriosam harum deserunt unde velit eum doloremque neque nobis? Impedit dolorum, numquam dicta corrupti vero deserunt.</div>
				<div className={s.image}><img src="https://sun9-80.userapi.com/sun9-22/impf/c849220/v849220031/324dd/3YMG7Uay-zs.jpg?size=510x340&quality=96&crop=101,0,1077,718&sign=3034f2b708e9e9d7a90de02a1e04e330&type=album" alt="#" /></div>
				<a className={s.button}>Like</a>
			</div>
			<div className={s.news}>
				<div className={s.title}>@ This news was added 3 hours ago</div>
				<div className={s.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet facere voluptatem asperiores vero, culpa non sed voluptate dignissimos cumque repudiandae quae recusandae magnam nobis porro perspiciatis repellat hic quod neque dicta nesciunt. Id, et. Laboriosam harum deserunt unde velit eum doloremque neque nobis? Impedit dolorum, numquam dicta corrupti vero deserunt.</div>
				<div className={s.image}><img src="https://sun9-80.userapi.com/sun9-22/impf/c849220/v849220031/324dd/3YMG7Uay-zs.jpg?size=510x340&quality=96&crop=101,0,1077,718&sign=3034f2b708e9e9d7a90de02a1e04e330&type=album" alt="#" /></div>
				<a className={s.button}>Like</a>
			</div>
			<div className={s.news}>
				<div className={s.title}>@ This news was added 3 hours ago</div>
				<div className={s.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet facere voluptatem asperiores vero, culpa non sed voluptate dignissimos cumque repudiandae quae recusandae magnam nobis porro perspiciatis repellat hic quod neque dicta nesciunt. Id, et. Laboriosam harum deserunt unde velit eum doloremque neque nobis? Impedit dolorum, numquam dicta corrupti vero deserunt.</div>
				<div className={s.image}><img src="https://sun9-80.userapi.com/sun9-22/impf/c849220/v849220031/324dd/3YMG7Uay-zs.jpg?size=510x340&quality=96&crop=101,0,1077,718&sign=3034f2b708e9e9d7a90de02a1e04e330&type=album" alt="#" /></div>
				<a className={s.button}>Like</a>
			</div>
		</div>
	)
}

export default News