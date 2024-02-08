
```cs
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class basic_script : MonoBehaviour {
	// Awake is called regardless of whether or not the script is enabled.
	void Awake() {}

	// Start is called first frame if the script is enabled.
	void Start() {}

	// Update updates every frame.
	void Update() {}
	
	// FixedUpdate updates 50 calls per second (every 0.02 seconds).
	void FixedUpdate() {}
	
	// LateUpdate is called after all Update functions have been called.
	void LateUpdate() {}
	
	// OnEnable is called when the object becomes enabled and active.
	void OnEnable() {}
	
	// OnDisable is called when the behaviour becomes disabled
	void OnDisable() {}
}
```