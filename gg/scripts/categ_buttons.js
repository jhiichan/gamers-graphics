if (document.images)
{
	image1 = new Image;
	image2 = new Image;
	image3 = new Image;
	image4 = new Image;
	image5 = new Image;
	image6 = new Image;
	image7 = new Image;
	image8 = new Image;
	image9 = new Image;
	image10 = new Image;
	image11 = new Image;
	image12 = new Image;
	image13 = new Image;
	image14 = new Image;
	image15 = new Image;
	image16 = new Image;
	image17 = new Image;
	image18 = new Image;
	image1.src = "../../images/categbuttons/rpg_norm.jpg";
	image2.src = "../../images/categbuttons/rpg_hover.jpg";
	image3.src = "../../images/categbuttons/mmorpg_norm.jpg";
	image4.src = "../../images/categbuttons/mmorpg_hover.jpg";
	image5.src = "../../images/categbuttons/mmorpg_browser.jpg";
	image6.src = "../../images/categbuttons/mmorpg_client.jpg";
	image7.src = "../../images/categbuttons/sim_norm.jpg";
	image8.src = "../../images/categbuttons/sim_hover.jpg";
	image9.src = "../../images/categbuttons/shooting_norm.jpg";
	image10.src = "../../images/categbuttons/shooting_hover.jpg";
	image11.src = "../../images/categbuttons/sports_norm.jpg";
	image12.src = "../../images/categbuttons/sports_hover.jpg";
	image13.src = "../../images/categbuttons/movieg_norm.jpg";
	image14.src = "../../images/categbuttons/movieg_hover.jpg";
	image15.src = "../../images/categbuttons/allg_norm.jpg";
	image16.src = "../../images/categbuttons/allg_hover.jpg";
	image17.src = "../../images/categbuttons/latest_norm.jpg";
	image18.src = "../../images/categbuttons/latest_hover.jpg";
}

function chgImg(name, image)
{
	if (document.images)
	{
	document[name].src = eval(image+".src");
	}
}