import s from './News.module.css'

let News = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.news}>
				<div className={s.title}>@ This news was added 3 hours ago</div>
				<div className={s.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet facere voluptatem asperiores vero, culpa non sed voluptate dignissimos cumque repudiandae quae recusandae magnam nobis porro perspiciatis repellat hic quod neque dicta nesciunt. Id, et. Laboriosam harum deserunt unde velit eum doloremque neque nobis? Impedit dolorum, numquam dicta corrupti vero deserunt.</div>
				<div className={s.image}><img src="https://warspot-asset.s3.amazonaws.com/articles/announces/000/007/385/layout/3-746c5545779eba7ad25d2e495b2df84a.jpg" alt="#" /></div>
				<a className={s.button}>Like</a>
			</div>
			<div className={s.news}>
				<div className={s.title}>@ This news was added 4 hours ago</div>
				<div className={s.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet facere voluptatem asperiores vero, culpa non sed voluptate dignissimos cumque repudiandae quae recusandae magnam nobis porro perspiciatis repellat hic quod neque dicta nesciunt. Id, et. Laboriosam harum deserunt unde velit eum doloremque neque nobis? Impedit dolorum, numquam dicta corrupti vero deserunt.</div>
				<div className={s.image}><img src="https://warspot-asset.s3.amazonaws.com/articles/announces/000/007/385/layout/3-746c5545779eba7ad25d2e495b2df84a.jpg" alt="#" /></div>
				<a className={s.button}>Like</a>
			</div>
			<div className={s.news}>
				<div className={s.title}>@ This news was added 5 hours ago</div>
				<div className={s.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet facere voluptatem asperiores vero, culpa non sed voluptate dignissimos cumque repudiandae quae recusandae magnam nobis porro perspiciatis repellat hic quod neque dicta nesciunt. Id, et. Laboriosam harum deserunt unde velit eum doloremque neque nobis? Impedit dolorum, numquam dicta corrupti vero deserunt.</div>
				<div className={s.image}><img src="https://warspot-asset.s3.amazonaws.com/articles/announces/000/007/385/layout/3-746c5545779eba7ad25d2e495b2df84a.jpg" alt="#" /></div>
				<a className={s.button}>Like</a>
			</div>
		</div>
	)
}

export default News