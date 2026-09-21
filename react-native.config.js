module.exports = {
    dependency: {
        platforms: {
            android: {
                // getInstance keeps a single CodePush across ReactHost/PackageList recreations (New Arch).
                packageInstance:
                    "CodePush.getInstance(getResources().getString(R.string.CodePushDeploymentKey), getApplicationContext(), BuildConfig.DEBUG)"
            }
        }
    }
};
