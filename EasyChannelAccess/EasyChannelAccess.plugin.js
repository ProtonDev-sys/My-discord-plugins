/**
 * @name EasyChannelAccess
 * @author ProtonDev
 * @authorId 710514340855545878
 * @version 1.0.0
 * @description Allows you to click the channel in the message box
 * @source https://github.com/mwittrien/BetterDiscordAddons/tree/master/Plugins/RemoveBlockedUsers/
 * @updateUrl https://mwittrien.github.io/BetterDiscordAddons/Plugins/RemoveBlockedUsers/RemoveBlockedUsers.plugin.js
 */

module.exports = (_ => {
	const config = {
		"info": {
			"name": "EasyChannelAccess",
			"author": "ProtonDev",
			"version": "1.0.0",
			"description": "Allows you to click the channel in the message box"
		}
	};

	return !window.BDFDB_Global || (!window.BDFDB_Global.loaded && !window.BDFDB_Global.started) ? class {
		getName () {return config.info.name;}
		getAuthor () {return config.info.author;}
		getVersion () {return config.info.version;}
		getDescription () {return `The Library Plugin needed for ${config.info.name} is missing. Open the Plugin Settings to download it. \n\n${config.info.description}`;}
		

		start () {this.load();}
		stop () {}
		getSettingsPanel () {
			let template = document.createElement("template");
			template.innerHTML = `<div style="color: var(--header-primary); font-size: 16px; font-weight: 300; white-space: pre; line-height: 22px;">The Library Plugin needed for ${config.info.name} is missing.\nPlease click <a style="font-weight: 500;">Download Now</a> to install it.</div>`;
			template.content.firstElementChild.querySelector("a").addEventListener("click", this.downloadLibrary);
			return template.content.firstElementChild;
		}
	} : (([Plugin, BDFDB]) => {
		var cachedChannelId, cachedReactions;
		
		return class EasyChannelAccess extends Plugin {
			
			onStart () {
				
				this.forceUpdateAll();
			}
			
			onStop () {
				this.forceUpdateAll();
			}
		
			forceUpdateAll () {				
				BDFDB.PatchUtils.forceAllUpdates(this);
				BDFDB.MessageUtils.rerenderAll();
			}

		};
	})(window.BDFDB_Global.PluginUtils.buildPlugin(config));
})();





